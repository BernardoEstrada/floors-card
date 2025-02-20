import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LockCommandsCardFeatureConfig } from "./types";
export declare const supportsLockCommandsCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiLockCommandsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getStubConfig(): LockCommandsCardFeatureConfig;
    setConfig(config: LockCommandsCardFeatureConfig): void;
    private _onTap;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lock-commands-card-feature": HuiLockCommandsCardFeature;
    }
}
export {};
