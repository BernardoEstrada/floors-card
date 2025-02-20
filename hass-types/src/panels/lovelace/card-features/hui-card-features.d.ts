import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "./hui-card-feature";
import type { LovelaceCardFeatureConfig } from "./types";
export declare class HuiCardFeatures extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    features?: LovelaceCardFeatureConfig[];
    color?: string;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-features": HuiCardFeatures;
    }
}
