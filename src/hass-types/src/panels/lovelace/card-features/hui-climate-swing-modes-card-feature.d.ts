import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import type { ClimateEntity } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { ClimateSwingModesCardFeatureConfig } from "./types";
export declare const supportsClimateSwingModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiClimateSwingModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: ClimateEntity;
    private _config?;
    _currentSwingMode?: string;
    private _haSelect?;
    static getStubConfig(): ClimateSwingModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: ClimateSwingModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-swing-modes-card-feature": HuiClimateSwingModesCardFeature;
    }
}
export {};
