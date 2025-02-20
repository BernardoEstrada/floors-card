import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { HumidifierCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "./hui-card-features-editor";
export declare class HuiHumidifierCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: HumidifierCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _featuresChanged;
    private _editDetailElement;
    private _updateFeature;
    private _computeLabelCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-card-editor": HuiHumidifierCardEditor;
    }
}
