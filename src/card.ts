import { html, LitElement, TemplateResult, nothing } from "lit";
import {styleMap} from 'lit/directives/style-map.js';
import { customElement, state } from "lit/decorators.js";
import { styles } from "./card.styles";
import { animationKeyframes, animations } from "./animations";
import { until } from "lit/directives/until.js";
import type { HassEntity } from "home-assistant-js-websocket";
import {
  HomeAssistant,
  LovelaceCardConfig,
  FloorRegistryEntry,
  AreaRegistryEntry,
  LovelaceCardEditor,
  hasAction,
  actionHandler,
  handleAction,
  ActionHandlerEvent,
  computeDomain
} from "ha";
import {
  FloorsCardConfig,
  Domain,
  FloorWithAreas,
} from "./types";
import {
  configValidator,
  stubConfig,
  fallbackConfig,
  cardName,
  registerCard,
  defaultIcons,
  defaultColors,
  getFloorIconFromTemplate,
  Color,
  getPreferredValue,
} from "./helpers";
import { getValidatedActions } from "helpers/entityCanBeToggled";
import { FloorSortMethod, SortOrder } from "types/FloorsCardConfig";
import { Class, TypedHassEntity } from "types/Domain";

registerCard({
  type: cardName,
  name: "Floors Card",
  description: "A card to display the floors of a house"
});
@customElement(cardName)
export default class FloorsCard extends LitElement {
  private _hass?: HomeAssistant;
  @state() private _entities: HassEntity[] = [];
  @state() private _temp_entities: string[] = [];
  @state() private _floors: Record<string, FloorRegistryEntry> = {};
  @state() private _areas: Record<string, AreaRegistryEntry> = {};
  @state() private keepEntityAfterToggleForMs?: number;
  private _entityCards = new Map<string, Promise<TemplateResult>>();
  private _entitiesContainerCard = new Map<string, Promise<TemplateResult>>();
  private config: FloorsCardConfig;

  static styles = [styles, ...animationKeyframes];

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./editor");
    return document.createElement(
      `${cardName}-editor`
    ) as LovelaceCardEditor;
  }

  constructor() {
    super();
    this.config = fallbackConfig;
  }

  private getMs = (s?: number): number | undefined => {
    return s && s >= 0 ? s * 1000 : undefined
  }

  public setConfig(config: Partial<FloorsCardConfig>): void {
    configValidator(config);
    this.keepEntityAfterToggleForMs = this.getMs(config.keep_entity_after_toggle_for);
    const entity_actions = { ...fallbackConfig.entity_actions, ...config.entity_actions };
    this.config = { ...fallbackConfig, ...config, entity_actions };
  }

  set hass(hass: HomeAssistant) {
    if (this._hass === hass) return;
    this._hass = hass;

    // Clear cache when entities change
    if (!this._updateEntities(hass)) return;
    this.requestUpdate();
  }

  private _updateEntities(hass: HomeAssistant, forceUpdate: boolean = false): boolean {
    const newEntities = (Object.values(hass.states) as TypedHassEntity[]).filter(this.entityStateFilter);
    const entitiesChanged = 
      newEntities.length !== this._entities.length ||
      newEntities.some((e, i) =>
        e.entity_id !== this._entities[i]?.entity_id ||
        e.last_updated !== this._entities[i]?.last_updated
      );
    
    if (!entitiesChanged && !forceUpdate) return false;

    this._entities = newEntities;
    this._floors = hass.floors || {};
    this._areas = hass.areas || {};
    this._iconCache.clear();
    this._colorCache.clear();

    return true;
  }

  private entityStateFilter = (entity: TypedHassEntity): boolean => {
    const domain = computeDomain(entity.entity_id);
    const deviceClass = (entity.attributes.device_class || 'no_class') as Class;
    if (this.config.include) {
      const include = this.config.include[domain];
      if (include) {
        if (this._temp_entities.includes(entity.entity_id)) return true;
        if (include.classes && !include.classes.includes(deviceClass)) return false;
        if (include.states && !include.states.includes(entity.state)) return false;
        if (this.config.include_states && !this.config.include_states.includes(entity.state)) return false;
        if (this?._hass?.entities[entity.entity_id]?.hidden && !this.config.include_hidden) return false;
        return true;
      }
      return false;
    } else {
      const domainIncluded = this.config.include_domains?.includes(domain as Domain) ?? false;
      const classIncluded = this.config.include_classes?.includes(deviceClass) ?? false;
      const stateIncluded = this.config.include_states?.includes(entity.state) ?? true;
      const hidden = this._hass!.entities[entity.entity_id]?.hidden;
      const includeHidden = this.config.include_hidden || !hidden;
      const entityInTempCache = this._temp_entities.includes(entity.entity_id);

      return entityInTempCache || (
        ((domainIncluded && classIncluded) || this.config.include_all) &&
        (stateIncluded) &&
        includeHidden
      );
    }
};

  protected render(): TemplateResult {
    if (!this._hass) return html`<ha-card>Loading...</ha-card>`;
    
    return html`
      <ha-card .header=${this.config.heading || nothing}>
        <div style="gap: ${this.config.floor_gap}px" class="card-content">${this._renderFloors()}</div>
      </ha-card>
    `;
  }

  private _compareFloors(compare_methods: FloorSortMethod[], order_method: SortOrder, a: FloorRegistryEntry, b: FloorRegistryEntry): number {
    const methods = {
      level: (a.level || 0) - (b.level || 0),
      name: a.name.localeCompare(b.name),
      id: a.floor_id.localeCompare(b.floor_id),
    };

    const result = compare_methods
      .map((method) => methods[method])
      .reduce((acc, val) => acc || val, 0);
    return order_method === 'desc' ? -result : result;
  }

  private _renderFloors(): (TemplateResult | typeof nothing)[] {
    let floors = Object.values(this._groupAreasByFloor())
    if (this.config.floor_sort_method) floors = floors.sort((a, b) => {
      return this._compareFloors(this.config.floor_sort_method!, this.config.floor_sort_order || 'asc', a, b);
    });
    
    return floors.map((floor) => {
      const renderedAreas = floor.areas.map((area) => this._renderArea(area));
      if (renderedAreas.every((area) => area === nothing)) return nothing;

      return html`
        <div style="gap: ${this.config.floor_gap}px" class="floor">
          ${this._renderFloorHeading(floor)} ${renderedAreas}
        </div>
      `;
    });
  }

  private _groupAreasByFloor(): Record<string, FloorWithAreas> {
    const floors: Record<string, FloorWithAreas> = {};
    Object.values(this._areas).forEach((area) => {
      const floorId = area.floor_id || "unknown";
      if (this.config.ignore_floors?.includes(floorId)) return;
      if (this.config.ignore_areas?.includes(area.area_id)) return;
      floors[floorId] ??= {
        ...this._floors[floorId],
        name: this._floors[floorId]?.name || "Unknown Floor",
        areas: [],
      };
      floors[floorId].areas.push(area);
    });

    if (this.config.area_sort_method) {
      Object.values(floors).forEach((floor) => {
        floor.areas = floor.areas.sort((a, b) => {
          const methods = {
            name: a.name.localeCompare(b.name),
            entities: this.config.area_sort_method?.includes('entities')
              ? this._getAreaEntities(a).length - this._getAreaEntities(b).length
              : 0,
          };

          const result = this.config.area_sort_method!
            .map((method) => methods[method])
            .reduce((acc, val) => acc || val, 0);
          return this.config.area_sort_order === 'desc' ? -result : result;
        });
      });
    }

    return floors;
  }

  private _renderFloorHeading(floor: FloorRegistryEntry): TemplateResult {
    let floorIcon;
    switch (this.config.show_floor_icons) {
      case 'always':
        floorIcon = floor.icon || getFloorIconFromTemplate(this.config.fallback_floor_icon_template, floor, this.config.floor_icons_prefer_alpha)
        break;
      case 'override':
        floorIcon = getFloorIconFromTemplate(this.config.fallback_floor_icon_template, floor, this.config.floor_icons_prefer_alpha)
        break;
      case 'if_available':
        floorIcon = floor.icon;
        break;
      case false:
        floorIcon = undefined;
        break;
    }

    const headingClass = this.config.floor_icons_position == 'right' ? 'icon-right' : 'icon-left'

    return html`
      <h2 class="${headingClass}">
        ${floorIcon
          ? html`<ha-icon .icon=${floorIcon}></ha-icon>`
          : nothing}
        ${floor.name}
      </h2>
    `;
  }

  private _renderArea(
    area: AreaRegistryEntry
  ): TemplateResult | typeof nothing {
    const entities = this._getAreaEntities(area);
    if (entities.length === 0) return nothing;

    const entitiesCardContainer = this.config.entities_container_card
      ? until(this._getEntitiesContainerCard(area.area_id, entities), html`Loading...`)
      : html`
          <div class="entities">
            ${entities.map((entity) =>
              until(this._getEntityCard(entity.entity_id), nothing)
            )}
          </div>
        `;
    const areaIconClass = this.config.entity_icon_placement == 'left' ? 'entity-icons-left' : 'entity-icons-right'
    return html`
      <div class="area ${areaIconClass}">
        ${this._renderAreaHeading(area)}
        ${entitiesCardContainer}
      </div>
    `;
  }

  private _getAreaEntities(area: AreaRegistryEntry): HassEntity[] {
    return this._entities
      .filter((entity) => {
        const entityArea = this._hass!.entities[entity.entity_id]?.area_id
        const deviceArea =
          this._hass!.devices[
            this._hass!.entities[entity.entity_id]?.device_id || ""
          ]?.area_id;
        return (entityArea || deviceArea) === area.area_id;
      })
      .sort(this._entitySort);
  }

  private _entitySort = (a: HassEntity, b: HassEntity): number => {
    const aDomain = computeDomain(a.entity_id);
    const bDomain = computeDomain(b.entity_id);
    const domainCompare = 
        this.config.domain_sort.indexOf(aDomain) - 
        this.config.domain_sort.indexOf(bDomain);
    return domainCompare !== 0 ? domainCompare : a.entity_id.localeCompare(b.entity_id);
  };


  private _renderAreaHeading(area: AreaRegistryEntry): TemplateResult {
    let areaIcon;
    switch (this.config.show_area_icons) {
      case 'always':
        areaIcon = area.icon || this.config.default_area_icon;
        break;
      case 'override':
        areaIcon = this.config.default_area_icon;
        break;
      case 'if_available':
        areaIcon = area.icon;
        break;
      case false:
        areaIcon = undefined;
        break;
    }

    const headingClass = this.config.area_icons_position == 'right' ? 'icon-right' : 'icon-left'
    return html`
      <h3 class="${headingClass}">
        ${areaIcon
          ? html`<ha-icon .icon=${areaIcon}></ha-icon>`
          : nothing}
        ${area.name}
      </h3>
    `;
  }

  private async _getEntitiesContainerCard(
    area_id: string,
    entities: HassEntity[]
  ): Promise<TemplateResult> {
    if (this.config.entities_container_card) {
      const config_overrides = {
        [this.config.entities_container_card.cards_param]: entities.map(
          (entity) => this._createEntityCardConfig(entity.entity_id)
        ),
      };
      const config = Object.assign(
        {},
        this.config.entities_container_card,
        config_overrides
      );
      const entitiesContainerCardKey = `${area_id}-${entities.length}`;
      if (!this._entitiesContainerCard[entitiesContainerCardKey]) {
        this._entitiesContainerCard[entitiesContainerCardKey] = this._createCard(config);
      }
      return this._entitiesContainerCard[entitiesContainerCardKey];
    }
    return html` <div class="entities">
      ${entities.map((entity) =>
        until(this._getEntityCard(entity.entity_id), html`Loading...`)
      )}
    </div>`;
  }

  private async _getEntityCard(entity_id: string): Promise<TemplateResult> {
    if (this.config.entity_card) {
      if (!this._entityCards.has(entity_id)) {
        this._entityCards.set(
          entity_id,
          this._createCard(this._createEntityCardConfig(entity_id))
        );
      }
      return this._entityCards.get(entity_id)!;
    }

    const entityColorString = this._getEntityColor(entity_id)
    const entityColor = Color.fromString(entityColorString)
      || Color.fromHassProperty(document.documentElement, entityColorString);
    
    const icon = this._getEntityIcon(entity_id);
    const iconColor = entityColor?.toRGB();
    const backgroundColor = entityColor?.toRGBA(0.2);

    const animationsStyle = this._getEntityAnimation(entity_id).map((animation) => animations[animation]);
    const iconStyles = {
      height: 'fit-content',
      width: 'fit-content'
    }

    const iconHtml = animationsStyle.reduce(
      (content, animationStyle) => html`<div style="${styleMap({...iconStyles, animation: animationStyle})}">${content}</div>`,
      html`<ha-icon .icon=${icon} style="color: ${iconColor};"></ha-icon>`
    )
    // : html`<ha-icon .icon=${icon} style="${styleMap({color: iconColor, animation: animationsStyle[0]})}"></ha-icon>`;
    
    return html`
      <div class="entity-card">
        <ha-icon-button
          .label=${entity_id}
          class="entity-card-button"
          size="50"
          style="background-color: ${backgroundColor};"
          @action=${e => this._handleAction(entity_id, e)}
          .actionHandler=${actionHandler({
              hasHold: hasAction(this.config.entity_actions?.hold_action),
              hasDoubleClick: hasAction(this.config.entity_actions?.double_tap_action),
            })}
        >
          <!-- <ha-icon .icon=${icon} style="color: ${iconColor};"></ha-icon> -->
          ${iconHtml}
        </ha-icon-button>
      </div>
    `;
  }

  private _handleAction(entityId: string, event: ActionHandlerEvent): void {
    const config = getValidatedActions(entityId, this.config.entity_actions);
    let trigger = event.detail.action;
    let action = config[`${trigger}_action`]

    if (config.fallback_to_next_action) {
      while (!action || (action && !action.isValid)) {
        const fallbackTrigger = trigger === 'tap' ? 'hold' : trigger === 'hold' ? 'double_tap' : undefined;
        if (!fallbackTrigger) return;

        trigger = fallbackTrigger;
        action = config[`${trigger}_action`];
      }
    }

    if (!action) return;

    if(action.action === 'toggle' && this.keepEntityAfterToggleForMs) {
      this._temp_entities.push(entityId);
      setTimeout(() => {
        this._temp_entities = this._temp_entities.filter((entity) => entity !== entityId);
        this._updateEntities(this._hass!, true);
        this.requestUpdate();
      }, this.keepEntityAfterToggleForMs);
    }

    handleAction(this, this._hass!, config, trigger);
  }

  private async _createCard(
    cardConfig: LovelaceCardConfig
  ): Promise<TemplateResult> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const helpers = await (window as any).loadCardHelpers();
    const card = helpers.createCardElement(cardConfig);
    card.hass = this._hass;
    // await card.requestUpdate();
    return html`${card}`;
  }

  private _createEntityCardConfig(entity_id: string): LovelaceCardConfig {
    return {
      type: 'none',
      ...this.config.entity_card,
      entity: entity_id,
      icon: this._getEntityIcon(entity_id),
      icon_color: this._getEntityColor(entity_id),
    };
  }

  private _getEntityAnimation(entity_id: string): string[] {
    const entity = this._hass!.states[entity_id];
    
    if (this.config.stack_animations)
      return getPreferredValue(this.config.animate, entity, true).flat()
    
    const top_option = getPreferredValue(this.config.animate, entity, false)
    return Array.isArray(top_option) ? top_option : [top_option];
  }

  private _iconCache = new Map<string, string>();
  private _colorCache = new Map<string, string>();

  private _getEntityIcon(entity_id: string): string {
    const hassEntity = this._hass!.states[entity_id];
    const cacheKey = `${entity_id}|${hassEntity.attributes.icon}|${hassEntity.state}|${hassEntity.attributes.device_class}`;
    
    if (!this._iconCache.has(cacheKey)) {
      const icon = getPreferredValue(this.config.preferred_icons, hassEntity, false)
        || this._defaultIcon(computeDomain(entity_id), hassEntity.attributes.device_class, hassEntity.state)
      this._iconCache.set(cacheKey, icon);
    }
    return this._iconCache.get(cacheKey)!;
  }

  private _defaultIcon(domain: string, deviceClass?: string, state?: string): string {
    const iconForDomain = defaultIcons[domain];
    if (typeof iconForDomain === 'string') return iconForDomain;

    const iconForClass = iconForDomain?.[deviceClass];
    if (typeof iconForClass === 'string') return iconForClass;

    const iconForState = iconForClass?.[state] || iconForDomain?.[state];
    if (iconForState) return iconForState;

    return defaultIcons.fallback;

  }
  
  private _getEntityColor(entity_id: string): string {
    const entity = this._hass!.states[entity_id];
    const cacheKey = `${entity_id}|${entity.state}|${JSON.stringify(entity.attributes)}`;

    if (!this._colorCache.has(cacheKey)) {
      const color = this._getEntityColorValue(entity);
      this._colorCache.set(cacheKey, color);
    }
    return this._colorCache.get(cacheKey)!;
  }

  private _getEntityColorValue(hassEntity: HassEntity): string {
    if (hassEntity.state === "off" && this.config.off_color)
      return this.config.off_color;

    const preferredColor = getPreferredValue(this.config.preferred_colors, hassEntity, false);

    const entity = {
      class: hassEntity,
      domain: computeDomain(hassEntity.entity_id),
    }

    if (entity.domain === 'light') {
      if (hassEntity.attributes.rgb_color) {
        const rgb = hassEntity.attributes.rgb_color;
        return `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
          .toString(16)
          .slice(1)}`;
      }
      return preferredColor || defaultColors.light;
    }

    if (preferredColor) return preferredColor;

    const colorForDomain = defaultColors[entity.domain];
    if (typeof colorForDomain === 'string') return colorForDomain;

    const colorForClass = colorForDomain?.[entity.class];
    if (colorForClass) return colorForClass;

    return defaultColors.fallback;
  }

  public static getStubConfig = (): Partial<FloorsCardConfig> => (stubConfig);

  getCardSize(): number {
    return 3;
  }
}
