import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-select";
import type { LovelaceElementConfig } from "../elements/types";
declare global {
    interface HASSDomEvents {
        "elements-changed": {
            elements: any[];
        };
    }
}
export declare class HuiPictureElementsCardRowEditor extends LitElement {
    hass?: HomeAssistant;
    elements?: LovelaceElementConfig[];
    private _select;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getSecondaryDescription;
    private _addElement;
    private _removeRow;
    private _editRow;
    private _duplicateRow;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-elements-card-row-editor": HuiPictureElementsCardRowEditor;
    }
}
