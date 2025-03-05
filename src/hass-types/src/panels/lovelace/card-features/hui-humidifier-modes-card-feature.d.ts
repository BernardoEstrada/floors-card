import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import type { HumidifierEntity } from "../../../data/humidifier";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { HumidifierModesCardFeatureConfig } from "./types";
export declare const supportsHumidifierModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiHumidifierModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HumidifierEntity;
    private _config?;
    _currentMode?: string;
    private _haSelect?;
    static getStubConfig(): HumidifierModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: HumidifierModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-modes-card-feature": HuiHumidifierModesCardFeature;
    }
}
export {};
