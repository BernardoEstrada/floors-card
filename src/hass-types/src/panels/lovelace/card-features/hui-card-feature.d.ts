import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeatureConfig } from "./types";
export declare class HuiCardFeature extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    feature?: LovelaceCardFeatureConfig;
    color?: string;
    private _element?;
    private _getFeatureElement;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-feature": HuiCardFeature;
    }
}
