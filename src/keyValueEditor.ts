import { fireEvent, HaFormSchema, HomeAssistant, sortableStyles } from "ha";
import { css, html, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { guard } from "lit/directives/guard.js";
import setupCustomlocalize from "localize";
import { SortableEvent } from "sortablejs";

let Sortable;

declare global {
  interface HASSDomEvents {
    "elements-changed": {
      elements: [string, string][];
      identifier: string;
    };
  }
}

@customElement("key-value-editor")
export class KeyValueEditor extends LitElement {
  @property({ attribute: false }) protected elements?: [string, string][];
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) protected identifier!: string;
  @property({ attribute: false }) protected valueSchema!: HaFormSchema;
  @property({ attribute: false }) protected heading?: string;
  @property({ attribute: false }) protected sortable?: boolean = true;
  @property({ attribute: false }) protected extraInputs?: TemplateResult;
  @property({ attribute: false }) protected keyName: string = 'key';
  @property({ attribute: false }) protected valueName: string = 'value';

  private _sortable?;

  private _removeElement(ev: Event) {
    const index = (ev.currentTarget as any).index;
    const newElements = this.elements!.concat();
    newElements.splice(index, 1);
    fireEvent(this, "elements-changed", { elements: newElements, identifier: this.identifier });
  }

  private _valueChanged(ev: CustomEvent) {
    const { key, val } = ev.detail.value;
    const newElements = this.elements!.concat();
    const index = newElements.findIndex(([k]) => k === key);
    newElements[index] = [key, val];

    fireEvent(this, "elements-changed", { elements: newElements, identifier: this.identifier });
  }

  private _keyChanged(index: number) {
    return (ev: CustomEvent) => {
      const newElements = this.elements!.concat();
      newElements[index][0] = ev.detail.value;
      fireEvent(this, "elements-changed", { elements: newElements, identifier: this.identifier });
    };
  }

  private _elementMoved(ev: SortableEvent) {
    if (ev.oldIndex === ev.newIndex) {
      return;
    }
    const newElements = this.elements!.concat();
    newElements.splice(ev.newIndex!, 0, newElements.splice(ev.oldIndex!, 1)[0]);
    fireEvent(this, "elements-changed", { elements: newElements, identifier: this.identifier });
  }

  private _addElement() {
    const newElements = this.elements ? this.elements.concat() : [];
    newElements.push(["", ""]);
    fireEvent(this, "elements-changed", { elements: newElements, identifier: this.identifier });
  }

  protected render() {
    if (!this.elements || !this.hass) {
      return nothing;
    }

    const localize = setupCustomlocalize(this.hass, ['editor', 'key_value_labels']);

    return html`
      <ha-expansion-panel
        header=${this.heading || "Configuration"} 
        outlined
      >
        <div class="key-value-editor">

        ${[this.extraInputs || nothing]}

        ${guard([this.elements, false], () =>
          false
          ? ""
          : this.elements!.map(([key, val], index) => html`
            <div class="element">
              ${this.sortable ? html`<div class="handle"><ha-icon icon="mdi:drag"></ha-icon></div>` : ""}
              <!-- make both inputs be on the same line -->
              <ha-form-string
                .hass=${this.hass}
                .data=${key}
                .label=${localize(this.keyName)}
                helperPersistent
                .schema=${{ name: localize(this.keyName), type: "string" }}
                @value-changed=${this._keyChanged(index)}
              ></ha-form-string>  
              <ha-form
                .hass=${this.hass}
                .data=${{key, val}} 
                .schema=${[
                  { ...this.valueSchema, name: 'val', context: { label: this.valueName } },
                ]}
                .computeLabel=${(schema) => localize(schema.context.label)}
                @value-changed=${this._valueChanged}
              ></ha-form>
              <ha-icon-button
              .label=${localize("remove")}
              class="remove-icon"
              .index=${index}
              @click=${this._removeElement}
              >
                <ha-icon icon="mdi:close"></ha-icon>
              </ha-icon-button>
            </div>
          `))}
          
          <div class="add-element">
            <div>
              <ha-icon-button
                .label=${localize("add")}
                @click=${this._addElement}
              >
                <ha-icon icon="mdi:plus"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

    private async _createSortable() {
      if (!Sortable) {
        const sortableImport = await import(
          "sortablejs/modular/sortable.core.esm"
        );
  
        Sortable = sortableImport.Sortable;
        Sortable.mount(sortableImport.OnSpill);
        Sortable.mount(sortableImport.AutoScroll());
      }
  
      this._sortable = new Sortable(this.shadowRoot!.querySelector(".key-value-editor"), {
        animation: 150,
        fallbackClass: "sortable-fallback",
        handle: ".handle",
        onEnd: async (evt: SortableEvent) => this._elementMoved(evt),
      });
    }
  
    protected updated(changedProps: PropertyValues) {
      super.updated(changedProps)
  
      if (!this._sortable && this.sortable) {
        this._createSortable();
        return;
      }
    }

    static get styles() {
    return [
      sortableStyles,
      css`
        .element {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: space-evenly;
        }

        .key-value-editor {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          padding-bottom: 12px;
        }

        ha-icon {
          display: flex;
        }

        ha-expansion-panel {
          --ha-card-border-radius: 6px;
        }

        ha-form::part(root) {
          display: flex;
          gap: 8px;
          flex-wrap: nowrap;
          align-items: center;
        }

        ha-form::part(root)>:not([own-margin]):not(:last-child) {
          margin-bottom: 0;
        }

        .root > * {
          margin: 0;
        }

        .element .handle {
          padding-right: 8px;
          cursor: move;
        }

        .element .handle > * {
          pointer-events: none;
        }

        .add-element {
          height: 60px;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-grow: 1;
          flex-direction: row-reverse;
        }

        .add-element div {
          display: flex;
          flex-direction: column;
        }

        .remove-icon,
        .edit-icon {
          --mdc-icon-button-size: 36px;
          color: var(--secondary-text-color);
        }

        .secondary {
          font-size: 12px;
          color: var(--secondary-text-color);
        }`
    ]
  }
}