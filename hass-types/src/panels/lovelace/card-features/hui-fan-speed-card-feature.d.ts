import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-select";
import "../../../components/ha-control-slider";
import type { FanEntity } from "../../../data/fan";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { FanSpeedCardFeatureConfig } from "./types";
export declare const supportsFanSpeedCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiFanSpeedCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: FanEntity;
    private _config?;
    static getStubConfig(): FanSpeedCardFeatureConfig;
    setConfig(config: FanSpeedCardFeatureConfig): void;
    private _localizeSpeed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _speedValueChanged;
    private _valueChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-speed-card-feature": HuiFanSpeedCardFeature;
    }
}
export {};
