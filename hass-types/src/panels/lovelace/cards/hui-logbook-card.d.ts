import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HassServiceTarget } from "home-assistant-js-websocket";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
import "../components/hui-warning";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { LogbookCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 24;
export declare class HuiLogbookCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        target: {
            entity_id: any[];
        };
    };
    hass: HomeAssistant;
    private _config?;
    private _time?;
    private _targetPickerValue;
    getCardSize(): number;
    validateTarget(config: LogbookCardConfig): HassServiceTarget | undefined;
    setConfig(config: LogbookCardConfig): void;
    private _getEntityIds;
    private _getMemoizedEntityIds;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-logbook-card": HuiLogbookCard;
    }
}
