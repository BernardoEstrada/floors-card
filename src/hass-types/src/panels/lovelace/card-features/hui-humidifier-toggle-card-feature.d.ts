import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-select";
import type { HumidifierEntity, HumidifierState } from "../../../data/humidifier";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { HumidifierToggleCardFeatureConfig } from "./types";
export declare const supportsHumidifierToggleCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiHumidifierToggleCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HumidifierEntity;
    private _config?;
    _currentState?: HumidifierState;
    static getStubConfig(): HumidifierToggleCardFeatureConfig;
    setConfig(config: HumidifierToggleCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setState;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-toggle-card-feature": HuiHumidifierToggleCardFeature;
    }
}
export {};
