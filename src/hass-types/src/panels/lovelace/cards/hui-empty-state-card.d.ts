import "@material/mwc-button/mwc-button";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard } from "../types";
import type { EmptyStateCardConfig } from "./types";
export declare class HuiEmptyStateCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    getCardSize(): number;
    setConfig(_config: EmptyStateCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-empty-state-card": HuiEmptyStateCard;
    }
}
