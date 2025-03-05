import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { CoverEntity } from "../../../data/cover";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverTiltPositionCardFeatureConfig } from "./types";
export declare const supportsCoverTiltPositionCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiCoverTiltPositionCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: CoverEntity;
    color?: string;
    private _config?;
    static getStubConfig(): CoverTiltPositionCardFeatureConfig;
    setConfig(config: CoverTiltPositionCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-tilt-position-card-feature": HuiCoverTiltPositionCardFeature;
    }
}
export {};
