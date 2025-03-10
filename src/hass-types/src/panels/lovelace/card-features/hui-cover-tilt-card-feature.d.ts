import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-svg-icon";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverTiltCardFeatureConfig } from "./types";
export declare const supportsCoverTiltCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiCoverTiltCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getStubConfig(): CoverTiltCardFeatureConfig;
    setConfig(config: CoverTiltCardFeatureConfig): void;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-tilt-card-feature": HuiCoverTiltCardFeature;
    }
}
export {};
