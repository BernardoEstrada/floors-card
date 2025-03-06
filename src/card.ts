import { html, LitElement, TemplateResult, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styles } from "./card.styles";
import { until } from "lit/directives/until.js";
import type { HassEntity } from "home-assistant-js-websocket";
import {
  HomeAssistant,
  LovelaceCardConfig,
  FloorRegistryEntry,
  AreaRegistryEntry,
} from "./hass-types";
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
} from "./helpers";
import { LovelaceCardEditor } from "./hass-types/src/panels/lovelace/types";


registerCard({
  type: cardName,
  name: "Floors Card",
  description: "A card to display the floors of a house"
});
@customElement(cardName)
export default class FloorsCard extends LitElement {
  private _hass?: HomeAssistant;
  @state() private _entities: HassEntity[] = [];
  @state() private _floors: Record<string, FloorRegistryEntry> = {};
  @state() private _areas: Record<string, AreaRegistryEntry> = {};
  private _entityCards = new Map<string, Promise<TemplateResult>>();
  private _entitiesContainerCard = new Map<string, Promise<TemplateResult>>();
  private config: FloorsCardConfig;

  static styles = styles;

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

  public setConfig(config: Partial<FloorsCardConfig>): void {
    configValidator(config);
    this.config = { ...fallbackConfig, ...config };
  }

  set hass(hass: HomeAssistant) {
    if (this._hass === hass) return;
    this._hass = hass;

    // Clear cache when entities change
    if (!this._updateEntities(hass)) return;
    this.requestUpdate();
  }

  private _updateEntities(hass: HomeAssistant): boolean {
    const newEntities = Object.values(hass.states).filter(this.entityStateFilter);
    const entitiesChanged = 
        newEntities.length !== this._entities.length ||
        newEntities.some((e, i) =>
            e.entity_id !== this._entities[i]?.entity_id ||
            e.last_updated !== this._entities[i]?.last_updated
        );
    
    if (!entitiesChanged) return false;

    this._entities = newEntities;
    this._floors = hass.floors || {};
    this._areas = hass.areas || {};
    this._iconCache.clear();
    this._colorCache.clear();

    return true;
  }

  private entityStateFilter = (entity: HassEntity): boolean => {
    const domain = entity.entity_id.split(".")[0];
    const deviceClass = entity.attributes.device_class || 'no_class';
    if (this.config.include) {
        const include = this.config.include[domain];
        if (include) {
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

        return (
            ((domainIncluded && classIncluded) || this.config.include_all) &&
            stateIncluded &&
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

  private _compareFloors(compare_methods: ('level' | 'name' | 'id')[], order_method: 'asc' | 'desc', a: FloorRegistryEntry, b: FloorRegistryEntry): number {
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
              until(this._getEntityCard(entity.entity_id), html`Loading...`)
            )}
          </div>
        `;
    const areaIconClass = this.config.entity_icon_placement == 'left' ? 'entity-icons-left' : 'entity-icons-right'
    return html`
      <div class="area ${areaIconClass}">
        ${this._renderAreaHeading(area)} ${entitiesCardContainer}
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
    const aDomain = a.entity_id.split(".")[0];
    const bDomain = b.entity_id.split(".")[0];
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

    const entityColor = this._getEntityColor(entity_id);
    const icon = this._getEntityIcon(entity_id);

    const iconColor = entityColor.includes("#") ? entityColor : `var(--${entityColor}-color)`;
    const backgroundColor = `rgb(from ${iconColor} r g b / 0.2)`; 
    return html`
      <div class="entity-card">
        <ha-icon-button
          .label=${entity_id}
          class="entity-card-button"
          size="50"
          style="background-color: ${backgroundColor};"
          @click=${() => this._handleMoreInfo(entity_id)}
        >
          <ha-icon .icon=${icon} style="color: ${iconColor};"></ha-icon>
        </ha-icon-button>
      </div>
    `;
  }

  private _handleMoreInfo(entityId: string) {
    const event: Event & { detail?: Object } = new Event("hass-more-info", {
      bubbles: true,
      composed: true,
    });
    event.detail = {
      entityId,
      view: "info",
    };
    this.dispatchEvent(event);
  }

  private async _createCard(
    cardConfig: LovelaceCardConfig
  ): Promise<TemplateResult> {
    const helpers = await window.loadCardHelpers();
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
    // return {
    //   type: "custom:mushroom-template-card",
    //   entity: entity_id,
    //   icon: this._getEntityIcon(entity_id),
    //   icon_color: this._getEntityColor(entity_id),
    //   tap_action: { action: "more-info" },
    //   card_mod: {
    //     style: {
    //       "mushroom-card mushroom-state-item$": css`
    //         .container { padding: 0 !important; padding-bottom: 4px !important; }
    //       `,
    //     },
    //   },
    // };
  }

  private _iconCache = new Map<string, string>();
  private _colorCache = new Map<string, string>();

  private _getEntityIcon(entity_id: string): string {
    const entity = this._hass!.states[entity_id];
    const cacheKey = `${entity_id}|${entity.attributes.icon}|${entity.state}|${entity.attributes.device_class}`;
    
    if (!this._iconCache.has(cacheKey)) {
        const [domain] = entity_id.split(".");
        const deviceClass = entity.attributes.device_class || 'no_class';

        const preferredIconFor = {
          entity: this.config.preferred_icons[entity_id],
          substring: Object.entries(this.config.preferred_icons).find(([key]) => entity_id.includes(key))?.[1],
          class: this.config.preferred_icons[deviceClass],
          domain: this.config.preferred_icons[domain],
        }
        const icon = (
          preferredIconFor.entity ||
          preferredIconFor.substring ||
          preferredIconFor.class ||
          preferredIconFor.domain ||
          this._defaultIcon(domain, deviceClass)
        );
        this._iconCache.set(cacheKey, icon);
    }
    return this._iconCache.get(cacheKey)!;
  }

  private _defaultIcon(domain: string, deviceClass?: string): string {
    const iconForDomain = defaultIcons[domain];
    if (typeof iconForDomain === 'string') return iconForDomain;

    const iconForClass = iconForDomain[deviceClass];
    if (iconForClass) return iconForClass;

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

  private _getEntityColorValue(entity: HassEntity): string {
    if (entity.state === "off" && this.config.off_color)
      return this.config.off_color;

    const entityClass = entity.attributes.device_class || 'no_class';
    const entityDomain = entity.entity_id.split(".")[0];

    const preferredColorFor = {
      entity: this.config.preferred_colors[entity.entity_id],
      substring: Object.entries(this.config.preferred_colors).find(([key]) => entity.entity_id.includes(key))?.[1],
      class: this.config.preferred_colors[entityClass],
      domain: this.config.preferred_colors[entityDomain],
    }

    const preferredColor = (
      preferredColorFor.entity ||
      preferredColorFor.substring ||
      preferredColorFor.class ||
      preferredColorFor.domain
    );

    if (entityDomain === 'light') {
      if (entity.attributes.rgb_color) {
        const rgb = entity.attributes.rgb_color;
        return `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2])
          .toString(16)
          .slice(1)}`;
      }
      return preferredColor || defaultColors.light;
    }

    if (preferredColor) return preferredColor;

    const colorForDomain = defaultColors[entityDomain];
    if (typeof colorForDomain === 'string') return colorForDomain;

    const colorForClass = colorForDomain[entityClass];
    if (colorForClass) return colorForClass;

    return defaultColors.fallback;
  }

  public static getStubConfig = (): Partial<FloorsCardConfig> => (stubConfig);

  getCardSize(): number {
    return 3;
  }
}
