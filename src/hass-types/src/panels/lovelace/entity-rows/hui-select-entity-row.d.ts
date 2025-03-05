import "@material/mwc-list/mwc-list-item";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-select";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import type { LovelaceRow } from "./types";
declare class HuiSelectEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntitiesCardEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-select-entity-row": HuiSelectEntityRow;
    }
}
export {};
