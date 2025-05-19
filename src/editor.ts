import { cardName, exampleDomains, exampleClasses, exampleStates, availableFloorIconTemplates } from "./helpers";
import { css, html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { any, array, assert, assign, boolean, literal, number, object, optional, string, union } from "superstruct";
import {
  actionConfigStruct,
  HaFormSchema,
  HaFormSelectSchema,
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceCardEditor,
  SelectSelector,
} from "ha";
import setupCustomlocalize from "localize";
import { EventWithDetail, FloorsCardConfig } from "types";
import "./keyValueEditor.ts"
import { availableBaseAnimations } from "animations";

const LOCALIZE_PATH = ['editor'];

interface HaFormSelectSchemaAny extends HaFormSelectSchema {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const animationSchema: SelectSelector = {
  select: {
    mode: 'dropdown',
    options: availableBaseAnimations.map((animation) => ({ value: animation, label: animation }))
  }
}

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
      { name: 'floor_gap', selector: { number: { min: 0, unit_of_measurement: 'px' } } },
    ]},
  ];

  const areaIconSettingsSchema: HaFormSchema[] = [
    { type: 'grid', name: '!area_icon_settings', flatten: true, schema: [
      { name: 'show_area_icons', selector: iconVisibilitySchema},
      ...config.show_area_icons ? areaIconEnabledPosition : [],
      { name: 'area_gap', selector: { number: { min: 0, unit_of_measurement: 'px' } } },
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
      { type: 'grid', name: '!entity_action_events', column_min_width: '40%', flatten: true, schema: [
        { type: 'grid', name: 'entity_actions', schema: [
          { name: 'tap_action', selector: { ui_action: { default_action: 'more-info' }}},
        ]},
        { type: 'grid', name: 'entity_actions', column_min_width: '100%', schema: [
          { name: 'hold_action', selector: { ui_action: {}}},
        ]},
        { type: 'grid', name: 'entity_actions', column_min_width: '100%', schema: [
          { name: 'double_tap_action', selector: { ui_action: {}}},
        ]},
        { name: 'keep_entity_after_toggle_for', selector: { number: { min: 0, mode: 'box', unit_of_measurement: localize('keep_entity_after_toggle_for_suffix') } } },
      ]},
      { type: 'grid', name: 'entity_actions', schema: [
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
      { type: 'expandable', name: 'groups.ignore_floors', flatten: true, schema: [
        { name: 'ignore_floors', selector: { floor: { multiple: true }}},
      ]},

      { type: 'expandable', name: 'groups.ignore_areas', flatten: true, schema: [
        { name: 'ignore_areas', selector: { area: { multiple: true }}},
      ]},
      { name: 'include_domains', selector: domainSelectorCustom},
      { name: 'include_classes', selector: classSelectorCustom},
      { name: 'include_states', selector: stateSelectorCustom},
      { type: 'grid', name: '!include_bools', flatten: true, schema: [
        { name: 'include_all', type: 'boolean' },
        { name: 'include_hidden', type: 'boolean' },
      ]},
    ]},
    // { name: 'include', type: 'any' },
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
    keep_entity_after_toggle_for: optional(number()),
    floor_sort_method: optional(array(union([literal('level'), literal('name'), literal('id')]))),
    floor_sort_order: optional(union([literal('asc'), literal('desc')])),
    area_sort_method: optional(array(union([literal('name'), literal('entities')]))),
    area_sort_order: optional(union([literal('asc'), literal('desc')])),
    class_sort: optional(array(string())),
    domain_sort: optional(array(string())),
    ignore_floors: optional(array(string())),
    ignore_areas: optional(array(string())),
    include_domains: optional(array(string())),
    include_classes: optional(array(string())),
    include_states: optional(array(string())),
    include: optional(any()),
    include_all: optional(boolean()),
    include_hidden: optional(boolean()),
    preferred_icons: optional(object()),
    preferred_colors: optional(object()),
    animate: optional(object()),
    stack_animations: optional(boolean()),
    entities_container_card: optional(object()),
    entity_card: optional(object()),
  })
);

@customElement(`${cardName}-editor`)
export class FloorsCardEditor extends LitElement implements LovelaceCardEditor
{
  @state() private _config?: LovelaceCardConfig;
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _enableMultipleAnimations = false;

  connectedCallback() {
    super.connectedCallback();
    // void loadHaComponents();
    if (!customElements.get("ha-form")) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (customElements.get("hui-button-card") as any)?.getConfigElement();
    }
    if (!customElements.get("ha-entity-picker")) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (customElements.get("hui-entities-card") as any)?.getConfigElement();
    }
    if (!customElements.get("ha-card-conditions-editor")) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (customElements.get("hui-conditional-card") as any)?.getConfigElement();
    }
  }

  public setConfig(config: LovelaceCardConfig): void {
    assert(config, floorsCardConfigStruct);

    if (Object.values(config.animate || {}).some((value) => Array.isArray(value) && value.length === 1)) {
      config = {
        ...config,
        animate: Object.fromEntries(Object.entries(config.animate || {}).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])),
      }
    }
    if (config.animate && Object.values(config.animate).some((value) => Array.isArray(value))) {  
      this._enableMultipleAnimations = true;
    }

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
    <!-- add a scroll container -->
    <div class="card-config">
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${genSchema(this._config as unknown as FloorsCardConfig)}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <ha-expansion-panel
        header=${"Preferences"} 
        outlined
        style="margin-top: 24px;"
      >
        <div class="content">
          <key-value-editor
          .hass=${this.hass}
          .elements=${Object.entries(this._config.preferred_icons || {})}
          .identifier=${'preferred_icons'}
          .heading=${localize('preferred_icons')}
          .valueName=${'icon'}
          .valueSchema=${{ selector: { icon: { placeholder: "mdi:home" } } }}
          .sortable=${false}
          @elements-changed=${this._keyValueChanged}
          ></key-value-editor>
          <key-value-editor
          .hass=${this.hass}
          .elements=${Object.entries(this._config.preferred_colors || {})}
          .identifier=${'preferred_colors'}
          .heading=${localize('preferred_colors')}
          .valueName=${'color'}
          .valueSchema=${{ selector: { ui_color: { default_color: 'disabled' } } }}
          @elements-changed=${this._keyValueChanged}
          ></key-value-editor>
          <key-value-editor
          .hass=${this.hass}
          .elements=${Object.entries(this._config.animate || {})}
          .identifier=${'animate'}
          .heading=${localize('animate')}
          .extraInputs=${html`<div style="display: flex; justify-content: space-evenly;">
            <ha-form-boolean
            .hass=${this.hass}
            .data=${this._config.stack_animations}
            .label=${localize('stack_animations')}
            .schema=${{ name: 'stack_animations', type: 'boolean' }}
            @value-changed=${this._singleValueChanged('stack_animations')}
            ></ha-form-boolean>
            <ha-form-boolean
            .hass=${this.hass}
            .data=${this._enableMultipleAnimations}
            .label=${localize('enable_multiple_animations')}
            .schema=${{ name: 'enable_multiple_animations', type: 'boolean' }}
            @value-changed=${this._toggleMultipleAnimations(this._config)}
            ></ha-form-boolean>
          </div>`}
          .valueName=${'animation'}
          .valueSchema=${{ selector: { select: { ...multiCustomSelectorSelect.select, ...animationSchema.select, multiple: this._enableMultipleAnimations } } } }
          @elements-changed=${this._keyValueChanged}
          ></key-value-editor>
        </div>
      </ha-expansion-panel>
    </div>
    `;
  }

  private _toggleMultipleAnimations(config: LovelaceCardConfig) {
    return (ev: CustomEvent) => {
      if (config && ev.detail.value === false) {
        const ev2 = new CustomEvent('value-changed', {
          detail: {
            value: {
              ...this._config,
                animate: Object.fromEntries(Object.entries(config.animate || {}).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])),
            }
          }
        });
        this._valueChanged(ev2);
      }
      this._enableMultipleAnimations = ev.detail.value;
    }
  }

  private _keyValueChanged(ev: CustomEvent): void {
    const ev2 = new CustomEvent('value-changed', {
      detail: {
        value: {
          ...this._config,
          [ev.detail.identifier]: Object.fromEntries(ev.detail.elements),
        }
      }
    });

    this._valueChanged(ev2);
  }

  private _singleValueChanged(key: string) {
    return (ev: CustomEvent) => {
      const ev2 = new CustomEvent('value-changed', {
        detail: {
          value: {
            ...this._config,
            [key]: ev.detail.value,
          }
        }
      });
      this._valueChanged(ev2);
    }
  }

  private _valueChanged(ev: CustomEvent): void {
    // fireEvent(this, "config-changed", { config: ev.detail.value });
    const detail = { config: ev.detail.value };
    const type = "config-changed";
    const event = new Event(type, {
      bubbles:  true,
      composed: true,
    });
    (event as EventWithDetail).detail = detail;
    this.dispatchEvent(event);
  }

  static get styles() {
    return css`
      .card-config {
        padding: 12px;
        overflow-y: auto;
        max-height: 60vh;
      }
      .content {
        padding: 12px;
      }

      ha-expansion-panel {
        --ha-card-border-radius: 6px;
      }

      key-value-editor {
        display: block;
      }

      .content>:not(:last-child) {
        margin-bottom: 24px;
      }
    `;
  }
}