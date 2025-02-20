import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { MediaPlayerVolumeSliderCardFeatureConfig } from "./types";
export declare const supportsMediaPlayerVolumeSliderCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiMediaPlayerVolumeSliderCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getStubConfig(): MediaPlayerVolumeSliderCardFeatureConfig;
    setConfig(config: MediaPlayerVolumeSliderCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-volume-slider-card-feature": HuiMediaPlayerVolumeSliderCardFeature;
    }
}
export {};
