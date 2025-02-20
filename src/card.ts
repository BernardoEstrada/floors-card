import { html, LitElement, TemplateResult, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from '../hass-types';
import { FloorRegistryEntry } from "../hass-types/src/data/floor_registry";
import { AreaRegistryEntry } from "../hass-types/src/data/area_registry";

interface FloorCardConfig {
  header?: string;
  off_color?: string;
  show_floor_icons: boolean | string;
  floor_icons_position: string;
  show_area_icons: boolean | string;
  area_icons_position: string;
  icon_placement: string;
  domain_sort_order: string[];
  class_sort_order: string[];
  include_domains: string[];
  include_classes: string[];
  include_states: string[];
  includeAll: boolean;
  include_hidden: boolean;
  preferred_icons: Record<string, string>;
}

interface FloorWithAreas extends FloorRegistryEntry {
  areas: AreaRegistryEntry[];
}

@customElement("floors-card")
export default class FloorsCard extends LitElement {
  @state() private _hass?: HomeAssistant;
  @state() private _entities: HassEntity[] = [];
  @state() private _floors: Record<string, FloorRegistryEntry> = {};
  @state() private _areas: Record<string, AreaRegistryEntry> = {};

  private config: FloorCardConfig = {
    show_floor_icons: true,
    floor_icons_position: "left",
    show_area_icons: true,
    area_icons_position: "left",
    icon_placement: "start",
    domain_sort_order: ["light", "switch", "binary_sensor", "sensor", "climate"],
    class_sort_order: ["door", "window", "tamper", "occupancy"],
    include_domains: ["light", "input_boolean", "binary_sensor"],
    include_classes: ["door", "window", "tamper", "occupancy"],
    include_states: ["on"],
    includeAll: false,
    include_hidden: false,
    preferred_icons: {},
  };

  setConfig(config: Partial<FloorCardConfig>): void {
    this.config = { ...this.config, ...config };
  }

  set hass(hass: HomeAssistant) {
    if (this._hass === hass) return;
    this._hass = hass;
    this._processEntities(hass);
  }

  private _processEntities(hass: HomeAssistant): void {
    const entities = Object.values(hass.states).filter(this.entityStateFilter);
    if (JSON.stringify(entities) === JSON.stringify(this._entities)) return;
    
    this._entities = entities;
    this._floors = hass.floors || {};
    this._areas = hass.areas || {};
  }

  private entityStateFilter = (entity: HassEntity): boolean => {
    const [domain] = entity.entity_id.split('.');
    const deviceClass = entity.attributes.device_class;
    
    return (
      (this.config.include_domains.includes(domain) &&
      this.config.include_classes.includes(deviceClass!) ||
      this.config.includeAll
    ) && (
      this.config.include_states.includes(entity.state) &&
      (!this._hass!.entities[entity.entity_id].hidden || this.config.include_hidden)
    ));
  };

  protected render(): TemplateResult {
    if (!this._hass) return html`<ha-card><div class="card-content">Loading...</div></ha-card>`;

    const floors = this._groupAreasByFloor();
    return html`
      <ha-card .header=${this.config.header || nothing}>
        <div class="card-content">
          ${Object.values(floors).map(floor => this._renderFloor(floor))}
        </div>
      </ha-card>
    `;
  }

  private _groupAreasByFloor(): Record<string, FloorWithAreas> {
    const floors: Record<string, FloorWithAreas> = {};

    Object.values(this._areas).forEach(area => {
      const floorId = area.floor_id || "unknown";
      if (!floors[floorId]) {
        floors[floorId] = {
          ...this._floors[floorId],
          name: this._floors[floorId]?.name || "Unknown Floor",
          areas: []
        };
      }
      floors[floorId].areas.push(area);
    });

    return floors;
  }

  private _renderFloor(floor: FloorWithAreas): TemplateResult {
    return html`
      <div class="floor">
        ${this._renderFloorHeader(floor)}
        ${floor.areas.map(area => this._renderArea(area))}
      </div>
    `;
  }

  private _renderFloorHeader(floor: FloorWithAreas): TemplateResult {
    return html`
      <h2>
        ${this.config.show_floor_icons ? this._renderIcon(floor.icon, floor.floor_id) : nothing}
        ${floor.name}
      </h2>
    `;
  }

  private _renderArea(area: AreaRegistryEntry): TemplateResult {
    const entities = this._getAreaEntities(area);
    return html`
      <div class="area">
        <h3>
          ${this.config.show_area_icons ? this._renderIcon(area.icon) : nothing}
          ${area.name}
        </h3>
        <div class="entities">
          ${entities.map(entity => this._renderEntity(entity))}
        </div>
      </div>
    `;
  }

  private _getAreaEntities(area: AreaRegistryEntry): HassEntity[] {
    return this._entities
      .filter(entity => {
        const entityArea = this._hass!.entities[entity.entity_id]?.area_id ||
          this._hass!.devices[this._hass!.entities[entity.entity_id]?.device_id]?.area_id;
        return entityArea === area.area_id;
      })
      .sort(this._entitySort);
  }

  private _entitySort = (a: HassEntity, b: HassEntity): number => {
    const aDomain = a.entity_id.split('.')[0];
    const bDomain = b.entity_id.split('.')[0];
    return this.config.domain_sort_order.indexOf(aDomain) - 
           this.config.domain_sort_order.indexOf(bDomain);
  };

  private _renderIcon(icon?: string, fallback?: string): TemplateResult {
    return html`
      <ha-icon 
        .icon=${icon || (fallback ? `mdi:home-floor-${fallback}` : 'mdi:texture-box')}
        style="margin: 0 8px 4px 0;"
      ></ha-icon>
    `;
  }

  private _renderEntity(entity: HassEntity): TemplateResult {
    return html`
      <div class="entity" @click=${() => this._showMoreInfo(entity)}>
        <ha-icon 
          .icon=${this._getEntityIcon(entity)}
          style="color: ${this._getEntityColor(entity)};"
        ></ha-icon>
        <span>${entity.state}</span>
      </div>
    `;
  }

  private _getEntityIcon(entity: HassEntity): string {
    const { entity_id, attributes } = entity;
    return this.config.preferred_icons[entity_id] ||
           this.config.preferred_icons[attributes.device_class!] ||
           attributes.icon ||
           this._defaultIcon(entity_id);
  }

  private _defaultIcon(entityId: string): string {
    const [domain] = entityId.split('.');
    const deviceClass = this._hass!.states[entityId].attributes.device_class;

    switch (domain) {
      case 'light': return 'mdi:lightbulb';
      case 'binary_sensor':
        switch (deviceClass) {
          case 'door': return 'mdi:door-open';
          case 'window': return 'mdi:window-closed';
          case 'occupancy': return 'mdi:motion-sensor';
          case 'tamper': return 'mdi:alarm-light-outline';
          default: return 'mdi:alert-circle';
        }
      default: return 'mdi:alert-circle-outline';
    }
  }

  private _getEntityColor(entity: HassEntity): string {
    if (entity.state === 'off' && this.config.off_color) return this.config.off_color;
    
    const [domain] = entity.entity_id.split('.');
    if (domain === 'light' && entity.attributes.rgb_color) {
      return `rgb(${entity.attributes.rgb_color.join(',')})`;
    }
    
    switch (entity.attributes.device_class) {
      case 'door': return 'var(--primary-color)';
      case 'window': return 'var(--accent-color)';
      default: return 'var(--secondary-text-color)';
    }
  }

  private async _showMoreInfo(entity: HassEntity): Promise<void> {
    const helpers = await window.loadCardHelpers();
    helpers.importMoreInfoControl(entity.entity_id);
  }

  static getStubConfig(): Partial<FloorCardConfig> {
    return {
      header: "Home Overview",
      show_floor_icons: "always",
      show_area_icons: "always",
      preferred_icons: { tamper: 'mdi:alarm-light-outline' }
    };
  }

  getCardSize(): number {
    return 3;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "floors-card": FloorsCard;
  }
}