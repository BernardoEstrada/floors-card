import "@material/mwc-list/mwc-list-item";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-select";
export declare class HaThemePicker extends LitElement {
    value?: string;
    label?: string;
    includeDefault: boolean;
    hass?: HomeAssistant;
    disabled: boolean;
    required: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-theme-picker": HaThemePicker;
    }
}
