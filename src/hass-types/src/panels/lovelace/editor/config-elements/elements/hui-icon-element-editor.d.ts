import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-form/ha-form";
import type { LovelacePictureElementEditor } from "../../../types";
import type { IconElementConfig } from "../../../elements/types";
export declare class HuiIconElementEditor extends LitElement implements LovelacePictureElementEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: IconElementConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-icon-element-editor": HuiIconElementEditor;
    }
}
