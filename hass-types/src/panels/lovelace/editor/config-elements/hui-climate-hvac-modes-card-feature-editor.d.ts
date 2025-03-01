import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { ClimateHvacModesCardFeatureConfig, LovelaceCardFeatureContext } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiClimateHvacModesCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: ClimateHvacModesCardFeatureConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-hvac-modes-card-feature-editor": HuiClimateHvacModesCardFeatureEditor;
    }
}
