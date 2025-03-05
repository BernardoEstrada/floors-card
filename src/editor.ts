import { cardName, exampleDomains, exampleClasses, exampleStates } from "./helpers";
import { html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HaFormSchema, HaFormSelectSchema } from "./hass-types/src/components/ha-form/types";
import { any, array, assert, assign, boolean, literal, number, object, optional, string, union } from "superstruct";
import { HomeAssistant, LovelaceCardConfig } from "./hass-types";
import { LovelaceCardEditor } from "./hass-types/src/panels/lovelace/types";
import { SelectSelector } from "./hass-types/src/data/selector";
import setupCustomlocalize from "localize";


interface HaFormSelectSchemaAny extends HaFormSelectSchema {
  options: readonly (readonly [any, string])[];
}

const iconVisibilitySchema: SelectSelector = {
  select: {
    mode: 'dropdown',
    options: [
      { value: 'always', label: 'Always' },
      { value: false, label: 'False' },
      { value: true, label: 'True' }
    ]
  }
};
const iconPositionSchema: SelectSelector = {
  select: {
    mode: 'dropdown',
    options: [
      { value: 'left', label: 'Left' },
      { value: 'right', label: 'Right' }
    ]
  }
};

const multiCustomSelectorSelect = {
  select: {
    reorder: true,
    multiple: true,
    custom_value: true,
  },
}

const domainSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleDomains } }
const classSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleClasses } }
const stateSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleStates } }


const SCHEMA: (HaFormSchema | HaFormSelectSchemaAny)[] = [
  { name: 'heading', type: 'string' },
  { type: 'grid', name: 'sections', flatten: true, schema: [
    { type: 'expandable', name: 'floor_config', flatten: true, schema: [
      { name: 'show_floor_icons', selector: iconVisibilitySchema},
      { name: 'floor_icons_position', selector: iconPositionSchema},
      { name: 'floor_gap', type: 'integer' },
    ]},
    { type: 'expandable', name: 'area_config', flatten: true, schema: [
      { name: 'show_area_icons', selector: iconVisibilitySchema},
      { name: 'area_icons_position', selector: iconPositionSchema},
      { name: 'area_gap', type: 'integer' },
      { name: 'default_area_icon', selector: { icon: { placeholder: 'mdi:texture-box' } } },
    ]},
  ]},
  { type: 'grid', name: 'entity_config', flatten: true, schema: [
    { name: 'entity_icon_placement', selector: iconPositionSchema},
    { name: 'off_color', selector: { ui_color: { default_color: 'disabled' }}},
  ]},
  { type: 'grid', name: 'sorting', flatten: true, schema: [
    { type: 'expandable', name: 'sorting', flatten: true, schema: [
      { name: 'domain_sort_order', selector: domainSelectorCustom },
      { name: 'class_sort_order', selector: classSelectorCustom },
    ]},
    { type: 'expandable', name: 'includes', flatten: true, schema: [
      { name: 'include_domains', selector: domainSelectorCustom},
      { name: 'include_classes', selector: classSelectorCustom},
      { name: 'include_states', selector: stateSelectorCustom},
      { type: 'grid', name: 'include_bools', flatten: true, schema: [
        { name: 'include_all', type: 'boolean' },
        { name: 'include_hidden', type: 'boolean' },
    ]},
    ]},
  ]},
  // { name: 'include', type: 'any' },
  // { name: 'preferred_icons', type: 'object' },
  // { name: 'entities_container_card', type: 'object' },
  // { name: 'entity_card', type: 'object' }
];

const lovelaceCardConfigStruct = object({
  index: optional(number()),
  view_index: optional(number()),
  view_layout: any(),
  type: string(),
  layout_options: any(),
  grid_options: any(),
  visibility: any(),
});



const iconVisibility = optional(union([literal('always'), boolean()]));
const alignment = optional(union([literal('left'), literal('right')]));

const floorsCardConfigStruct = assign(
  lovelaceCardConfigStruct,
  object({
    heading: optional(string()),
    off_color: optional(string()),
    show_floor_icons: iconVisibility,
    floor_icons_position: alignment,
    floor_gap: optional(number()),
    area_gap: optional(number()),
    show_area_icons: iconVisibility,
    default_area_icon: optional(string()),
    area_icons_position: alignment,
    entity_icon_placement: alignment,
    class_sort_order: optional(array(string())),
    domain_sort_order: optional(array(string())),
    include_domains: optional(array(string())),
    include_classes: optional(array(string())),
    include_states: optional(array(string())),
    include: optional(any()),
    include_all: optional(boolean()),
    include_hidden: optional(boolean()),
    preferred_icons: optional(object()),
    entities_container_card: optional(object()),
    entity_card: optional(object()),
  })
);

@customElement(`${cardName}-editor`)
export class FloorsCardEditor extends LitElement implements LovelaceCardEditor
{
  @state() private _config?: LovelaceCardConfig;
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) public localize = setupCustomlocalize(this.hass);
  
  connectedCallback() {
    super.connectedCallback();
    // void loadHaComponents();
    if (!customElements.get("ha-form")) {
      (customElements.get("hui-button-card") as any)?.getConfigElement();
    }
    if (!customElements.get("ha-entity-picker")) {
      (customElements.get("hui-entities-card") as any)?.getConfigElement();
    }
    if (!customElements.get("ha-card-conditions-editor")) {
      (customElements.get("hui-conditional-card") as any)?.getConfigElement();
    }
  }

  public setConfig(config: LovelaceCardConfig): void {
    const parsedConfig = config;
    assert(parsedConfig, floorsCardConfigStruct);
    this._config = config;
  }

  // Heading -> ui.panel.lovelace.editor.card.heading.heading
  // Off Color -> 

  private _computeLabel = (schema: HaFormSchema) => {
    return this.localize(`editor.card.floors.${schema.name}`);
  };

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    // fireEvent(this, "config-changed", { config: ev.detail.value });
    const detail = { config: ev.detail.value };
    const type = "config-changed";
    // @ts-ignore
    const event = new Event(type, {
      bubbles:  true,
      composed: true,
    });
    (event as any).detail = detail;
    this.dispatchEvent(event);
  }
}