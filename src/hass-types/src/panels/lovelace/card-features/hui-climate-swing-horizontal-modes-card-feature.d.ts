import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import type { ClimateEntity } from "../../../data/climate";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { ClimateSwingHorizontalModesCardFeatureConfig } from "./types";
export declare const supportsClimateSwingHorizontalModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiClimateSwingHorizontalModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: ClimateEntity;
    private _config?;
    _currentSwingHorizontalMode?: string;
    private _haSelect?;
    static getStubConfig(): ClimateSwingHorizontalModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: ClimateSwingHorizontalModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-swing-horizontal-modes-card-feature": HuiClimateSwingHorizontalModesCardFeature;
    }
}
export {};
