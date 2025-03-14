import { cardName, exampleDomains, exampleClasses, exampleStates, availableFloorIconTemplates } from "./helpers";
import { html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { any, array, assert, assign, boolean, literal, number, object, optional, string, union } from "superstruct";
import {
  actionConfigStruct,
  HaFormSchema,
  HaFormSelectSchema,
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceCardEditor,
  SelectSelector
} from "ha";
import setupCustomlocalize from "localize";
import { FloorsCardConfig } from "types";

const LOCALIZE_PATH = ['editor'];

interface HaFormSelectSchemaAny extends HaFormSelectSchema {
  options: readonly (readonly [any, string])[];
}
const localize = setupCustomlocalize(undefined, LOCALIZE_PATH);

const iconVisibilitySchema: SelectSelector = {
  select: {
    mode: 'dropdown',
    options: [
      { value: false, label: localize('icon_visibility.false') },
      { value: 'if_available', label: localize('icon_visibility.if_available') },
      { value: 'always', label: localize('icon_visibility.always') },
      { value: 'override', label: localize('icon_visibility.override') },
    ]
  }
};
const iconPositionSchema: SelectSelector = {
  select: {
    mode: 'dropdown',
    options: [
      { value: 'left', label: localize('icon_position.left') },
      { value: 'right', label: localize('icon_position.right') },
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
  { value: 'level', label: localize('sorting.level') },
  { value: 'name', label: localize('sorting.name') },
  { value: 'id', label: localize('sorting.id') },
]}}

const areaSortMethodSelector: SelectSelector = { select: { reorder:true, multiple: true, options: [
  { value: 'name', label: localize('sorting.name') },
  { value: 'entities', label: localize('sorting.entities') },
]}}

const sortOrderSelector: SelectSelector = { select: { options: [
  { value: 'asc', label: localize('sorting.asc') },
  { value: 'desc', label: localize('sorting.desc') },
]}}
const domainSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleDomains } }
const classSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleClasses } }
const stateSelectorCustom: SelectSelector = { select: { ...multiCustomSelectorSelect.select, options: exampleStates } }
const fallbackIconSelector: SelectSelector = { select: { options: availableFloorIconTemplates.map((icon) => ({ value: icon, label: localize(`icon_templates.${icon}`) })) } }


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
    { type: 'grid', name: '!floor_icon_settings', flatten: true, schema: [
      { name: 'show_floor_icons', selector: iconVisibilitySchema},
      ...config.show_floor_icons ? floorIconEnabledSchema : [],
      ...['always', 'override'].includes(config.show_floor_icons as string) ? floorIconTemplatesSchema : [],
      { name: 'floor_gap', type: 'integer' },
    ]},
  ];

  const areaIconSettingsSchema: HaFormSchema[] = [
    { type: 'grid', name: '!area_icon_settings', flatten: true, schema: [
      { name: 'show_area_icons', selector: iconVisibilitySchema},
      ...config.show_area_icons ? areaIconEnabledPosition : [],
      { name: 'area_gap', type: 'integer' },
    ]},
  ]

  return [
    { name: 'heading', type: 'string' },
    { type: 'expandable', name: 'groups.floor_config', flatten: true, schema: floorIconSettingsSchema},
    { type: 'expandable', name: 'groups.area_config', flatten: true, schema: areaIconSettingsSchema},
    { type: 'expandable', name: 'groups.entities_config', flatten: true, schema: [
      { type: 'grid', name: '!entity_icons', flatten: true, schema: [
        { name: 'entity_icon_placement', selector: iconPositionSchema},
        { name: 'off_color', selector: { ui_color: { default_color: 'disabled' }}},
      ]},
      { type: 'grid', name: 'entity_actions', column_min_width: '100%', schema: [
        { type: 'grid', name: '!entity_action_events', column_min_width: '40%', flatten: true, schema: [
          { name: 'tap_action', selector: { ui_action: { default_action: 'more-info' }}},
          { name: 'hold_action', selector: { ui_action: {}}},
          { name: 'double_tap_action', selector: { ui_action: {}}},
        ]},
        { name: 'fallback_to_next_action', type: 'boolean', context: { prefix: 'entity_actions' }},
      ]},
    ]},
    { type: 'expandable', name: 'groups.sorting', flatten: true, schema: [
      { type: 'constant', name: 'groups.sorting_floors' },
      { type: 'grid', name: '!floor_sorting', flatten: true, schema: [
        { name: 'floor_sort_method', selector: floorSortMethodSelector },
        { name: 'floor_sort_order', selector: sortOrderSelector },
      ]},
      { type: 'constant', name: 'groups.sorting_areas' },
      { type: 'grid', name: '!area_sorting', flatten: true, schema: [
        { name: 'area_sort_method', selector: areaSortMethodSelector },
        { name: 'area_sort_order', selector: sortOrderSelector },
      ]},
      { type: 'constant', name: 'groups.sorting_entities' },
      { name: 'domain_sort', selector: domainSelectorCustom },
      { name: 'class_sort', selector: classSelectorCustom },
    ]},
    { type: 'expandable', name: 'groups.includes', flatten: true, schema: [
      { name: 'include_domains', selector: domainSelectorCustom},
      { name: 'include_classes', selector: classSelectorCustom},
      { name: 'include_states', selector: stateSelectorCustom},
      { type: 'grid', name: '!include_bools', flatten: true, schema: [
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
    entity_actions: optional(object({
      tap_action: optional(actionConfigStruct),
      hold_action: optional(actionConfigStruct),
      double_tap_action: optional(actionConfigStruct),
      fallback_to_next_action: optional(boolean()),
    })),
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
    const localize = setupCustomlocalize(
      this.hass,
      LOCALIZE_PATH,
      ['ui', 'panel', 'lovelace', 'editor', 'card', 'generic'],
    );

    const prefix = schema.context?.prefix;
    const localized =  localize(`${prefix ? `${prefix}.` : ''}${schema.name}`);
    return localized;
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