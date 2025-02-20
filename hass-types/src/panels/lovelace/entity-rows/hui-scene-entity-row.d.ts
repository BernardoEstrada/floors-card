import "@material/mwc-button/mwc-button";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { ActionRowConfig, LovelaceRow } from "./types";
declare class HuiSceneEntityRow extends LitElement implements LovelaceRow {
    hass: HomeAssistant;
    private _config?;
    setConfig(config: ActionRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _callService;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-scene-entity-row": HuiSceneEntityRow;
    }
}
export {};
