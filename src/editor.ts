import { cardName, exampleDomains, exampleClasses, exampleStates, availableFloorIconTemplates } from "./helpers";
import { html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HaFormBaseSchema, HaFormSchema, HaFormSelectSchema } from "./hass-types/src/components/ha-form/types";
import { any, array, assert, assign, boolean, literal, number, object, optional, string, union } from "superstruct";
import { HomeAssistant, LovelaceCardConfig } from "./hass-types";
import { LovelaceCardEditor } from "./hass-types/src/panels/lovelace/types";
import { SelectSelector } from "./hass-types/src/data/selector";
import setupCustomlocalize from "localize";
import { FloorsCardConfig } from "types";


interface HaFormSelectSchemaAny extends HaFormSelectSchema {
  options: readonly (readonly [any, string])[];
}
const localize = setupCustomlocalize();

const iconVisibilitySchema: SelectSelector = {
  select: {
    mode: 'dropdown',
    options: [
      { value: false, label: localize('editor.card.floors.icon_visibility.false') },
      { value: 'if_available', label: localize('editor.card.floors.icon_visibility.if_available') },
      { value: 'always', label: localize('editor.card.floors.icon_visibility.always') },
      { value: 'override', label: localize('editor.card.floors.icon_visibility.override') },
    ]
  }
};
const iconPositionSchema: SelectSelector = {
  select: {
    mode: 'dropdown',
    options: [
      { value: 'left', label: localize('editor.card.floors.icon_position.left') },
      { value: 'right', label: localize('editor.card.floors.icon_position.right') },
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

const floorSortMethodSelector: SelectSelector = { select: { reorder:true, multiple: true, options: [
  { value: 'level', label: localize('editor.card.floors.sorting.level') },
  { value: 'name', label: localize('editor.card.floors.sorting.name') },
  { value: 'id', label: localize('editor.card.floors.sorting.id') },
]}}

const areaSortMethodSelector: SelectSelector = { select: { reorder:true, multiple: true, options: [
  { value: 'name', label: localize('editor.card.floors.sorting.name') },
  { value: 'entities', label: localize('editor.card.floors.sorting.entities') },
]}}

const sortOrderSelector: SelectSelector = { select: { options: [
  { value: 'asc', label: localize('editor.card.floors.sorting.asc') },
  { value: 'desc', label: localize('editor.card.floors.sorting.desc') },
]}}
const domainSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleDomains } }
const classSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleClasses } }
const stateSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleStates } }
const fallbackIconSelector: SelectSelector = { select: { options: availableFloorIconTemplates.map((icon) => ({ value: icon, label: localize(`editor.card.floors.icon_templates.${icon}`) })) } }


const floorIconTemplatesSchema: HaFormSchema[] = [
  { name: 'fallback_floor_icon_template', selector: fallbackIconSelector },
  { name: 'floor_icons_prefer_alpha', type: 'boolean' },
];
const floorIconEnabledSchema: HaFormSchema[] = [{ name: 'floor_icons_position', selector: iconPositionSchema}];

const areaIconEnabledPosition: HaFormSchema[] = [
  { name: 'area_icons_position', selector: iconPositionSchema},
  { name: 'default_area_icon', selector: { icon: { placeholder: 'mdi:texture-box' } } },
];

const genSchema = (config: FloorsCardConfig): (HaFormSchema | HaFormSelectSchemaAny)[] => {
  const floorIconSettingsSchema: HaFormSchema[] = [
    { name: 'show_floor_icons', selector: iconVisibilitySchema},
    ...['always', 'override'].includes(config.show_floor_icons as string) ? floorIconTemplatesSchema : [],
    ...config.show_floor_icons ? floorIconEnabledSchema : [],
    { name: 'floor_gap', type: 'integer' },
  ];

  const areaIconSettingsSchema: HaFormSchema[] = [
    { name: 'show_area_icons', selector: iconVisibilitySchema},
    ...config.show_area_icons ? areaIconEnabledPosition : [],
    { name: 'area_gap', type: 'integer' },
  ];

  return [
    { name: 'heading', type: 'string' },
    { type: 'expandable', name: 'floor_config', flatten: true, schema: floorIconSettingsSchema},
    { type: 'expandable', name: 'area_config', flatten: true, schema: areaIconSettingsSchema},
    { type: 'grid', name: 'entity_config', flatten: true, schema: [
      { name: 'entity_icon_placement', selector: iconPositionSchema},
      { name: 'off_color', selector: { ui_color: { default_color: 'disabled' }}},
    ]},
    { type: 'expandable', name: 'groups.sorting', flatten: true, schema: [
      { type: 'constant', name: 'groups.sorting_floors' },
      { name: 'floor_sort_method', selector: floorSortMethodSelector },
      { name: 'floor_sort_order', selector: sortOrderSelector },
      { type: 'constant', name: 'groups.sorting_areas' },
      { name: 'area_sort_method', selector: areaSortMethodSelector },
      { name: 'area_sort_order', selector: sortOrderSelector },
      { type: 'constant', name: 'groups.sorting_entities' },
      { name: 'domain_sort', selector: domainSelectorCustom },
      { name: 'class_sort', selector: classSelectorCustom },
    ]},
    { type: 'expandable', name: 'groups.includes', flatten: true, schema: [
      { name: 'include_domains', selector: domainSelectorCustom},
      { name: 'include_classes', selector: classSelectorCustom},
      { name: 'include_states', selector: stateSelectorCustom},
      { type: 'grid', name: 'include_bools', flatten: true, schema: [
        { name: 'include_all', type: 'boolean' },
        { name: 'include_hidden', type: 'boolean' },
    ]},
    ]},
    // { name: 'include', type: 'any' },
    // { name: 'preferred_icons', type: 'object' },
    // { name: 'preferred_colors', type: 'object' },
    // { name: 'entities_container_card', type: 'object' },
    // { name: 'entity_card', type: 'object' }
  ];
}

const lovelaceCardConfigStruct = object({
  index: optional(number()),
  view_index: optional(number()),
  view_layout: any(),
  type: string(),
  layout_options: any(),
  grid_options: any(),
  visibility: any(),
});



const iconVisibility = optional(union([literal('always'), literal('if_available'), literal('override'), literal(false)]));
const alignment = optional(union([literal('left'), literal('right')]));
const fallbackIconStruct = optional(union([literal(undefined), ...availableFloorIconTemplates.map(literal)]));

const floorsCardConfigStruct = assign(
  lovelaceCardConfigStruct,
  object({
    heading: optional(string()),
    off_color: optional(string()),
    show_floor_icons: iconVisibility,
    fallback_floor_icon_template: fallbackIconStruct,
    floor_icons_prefer_alpha: optional(boolean()),
    floor_icons_position: alignment,
    floor_gap: optional(number()),
    area_gap: optional(number()),
    show_area_icons: iconVisibility,
    default_area_icon: optional(string()),
    area_icons_position: alignment,
    entity_icon_placement: alignment,
    floor_sort_method: optional(array(union([literal('level'), literal('name'), literal('id')]))),
    floor_sort_order: optional(union([literal('asc'), literal('desc')])),
    area_sort_method: optional(array(union([literal('name'), literal('entities')]))),
    area_sort_order: optional(union([literal('asc'), literal('desc')])),
    class_sort: optional(array(string())),
    domain_sort: optional(array(string())),
    include_domains: optional(array(string())),
    include_classes: optional(array(string())),
    include_states: optional(array(string())),
    include: optional(any()),
    include_all: optional(boolean()),
    include_hidden: optional(boolean()),
    preferred_icons: optional(object()),
    preferred_colors: optional(object()),
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
    assert(config, floorsCardConfigStruct);
    this._config = config;
  }

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
        .schema=${genSchema(this._config as unknown as FloorsCardConfig)}
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