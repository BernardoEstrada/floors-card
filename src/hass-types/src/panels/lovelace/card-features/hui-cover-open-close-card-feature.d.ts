import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-svg-icon";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { CoverOpenCloseCardFeatureConfig } from "./types";
export declare const supportsCoverOpenCloseCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiCoverOpenCloseCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getStubConfig(): CoverOpenCloseCardFeatureConfig;
    setConfig(config: CoverOpenCloseCardFeatureConfig): void;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-open-close-card-feature": HuiCoverOpenCloseCardFeature;
    }
}
export {};
