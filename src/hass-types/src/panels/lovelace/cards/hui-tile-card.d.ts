import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-ripple";
import "../../../components/ha-state-icon";
import "../../../components/ha-svg-icon";
import "../../../components/tile/ha-tile-badge";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-image";
import "../../../components/tile/ha-tile-info";
import "../../../state-display/state-display";
import type { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ThermostatCardConfig, TileCardConfig } from "./types";
export declare const getEntityDefaultTileIconAction: (entityId: string) => "toggle" | "more-info";
export declare class HuiTileCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): TileCardConfig;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ThermostatCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    private _handleIconAction;
    private _getImageUrl;
    private _computeStateColor;
    get hasCardAction(): boolean;
    get hasIconAction(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-tile-card": HuiTileCard;
    }
}
