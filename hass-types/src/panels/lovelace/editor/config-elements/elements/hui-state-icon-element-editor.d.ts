import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-form/ha-form";
import type { LovelacePictureElementEditor } from "../../../types";
import type { StateIconElementConfig } from "../../../elements/types";
export declare class HuiStateIconElementEditor extends LitElement implements LovelacePictureElementEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateIconElementConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-icon-element-editor": HuiStateIconElementEditor;
    }
}
