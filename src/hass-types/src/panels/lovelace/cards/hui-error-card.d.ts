import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard } from "../types";
import type { ErrorCardConfig } from "./types";
export declare class HuiErrorCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    preview: boolean;
    private _config?;
    getCardSize(): number;
    setConfig(config: ErrorCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-error-card": HuiErrorCard;
    }
}
