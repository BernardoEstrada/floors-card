import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-select";
import "../../../components/ha-control-slider";
import type { OperationMode, WaterHeaterEntity } from "../../../data/water_heater";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { WaterHeaterOperationModesCardFeatureConfig } from "./types";
export declare const supportsWaterHeaterOperationModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiWaterHeaterOperationModeCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: WaterHeaterEntity;
    private _config?;
    _currentOperationMode?: OperationMode;
    static getStubConfig(): WaterHeaterOperationModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: WaterHeaterOperationModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-water-heater-operation-modes-card-feature": HuiWaterHeaterOperationModeCardFeature;
    }
}
export {};
