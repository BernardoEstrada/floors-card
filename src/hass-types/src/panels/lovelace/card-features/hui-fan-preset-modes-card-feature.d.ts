import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import type { FanEntity } from "../../../data/fan";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { FanPresetModesCardFeatureConfig } from "./types";
export declare const supportsFanPresetModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiFanPresetModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: FanEntity;
    private _config?;
    _currentPresetMode?: string;
    private _haSelect?;
    static getStubConfig(): FanPresetModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: FanPresetModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-preset-modes-card-feature": HuiFanPresetModesCardFeature;
    }
}
export {};
