import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-form/ha-form";
import type { LovelacePictureElementEditor } from "../../../types";
import type { StateLabelElementConfig } from "../../../elements/types";
export declare class HuiStateLabelElementEditor extends LitElement implements LovelacePictureElementEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateLabelElementConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-element-editor": HuiStateLabelElementEditor;
    }
}
