import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverPositionCardFeatureConfig } from "./types";
import "../../../components/ha-control-slider";
export declare const supportsCoverPositionCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiCoverPositionCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    color?: string;
    private _config?;
    static getStubConfig(): CoverPositionCardFeatureConfig;
    setConfig(config: CoverPositionCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-position-card-feature": HuiCoverPositionCardFeature;
    }
}
export {};
