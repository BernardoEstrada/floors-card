import "@material/mwc-button/mwc-button";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { ActionRowConfig, LovelaceRow } from "./types";
declare class HuiButtonEntityRow extends LitElement implements LovelaceRow {
    hass: HomeAssistant;
    private _config?;
    setConfig(config: ActionRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _pressButton;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-entity-row": HuiButtonEntityRow;
    }
}
export {};
