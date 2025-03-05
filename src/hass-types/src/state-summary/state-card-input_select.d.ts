import "@material/mwc-list/mwc-list-item";
import "../components/ha-select";
import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-badge";
import type { InputSelectEntity } from "../data/input_select";
import type { HomeAssistant } from "../types";
declare class StateCardInputSelect extends LitElement {
    hass: HomeAssistant;
    stateObj: InputSelectEntity;
    private _haSelect;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _selectedOptionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-input_select": StateCardInputSelect;
    }
}
export {};
