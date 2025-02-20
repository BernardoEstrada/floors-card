import "@material/mwc-list/mwc-list-item";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-select";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import type { LovelaceRow } from "./types";
declare class HuiInputSelectEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    private _haSelect;
    setConfig(config: EntitiesCardEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _selectedChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-input-select-entity-row": HuiInputSelectEntityRow;
    }
}
export {};
