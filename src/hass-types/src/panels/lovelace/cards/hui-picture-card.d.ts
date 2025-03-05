import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { PictureCardConfig } from "./types";
export declare class HuiPictureCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): PictureCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: PictureCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-card": HuiPictureCard;
    }
}
