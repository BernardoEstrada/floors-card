import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon-next";
import "./ha-svg-icon";
import "./ha-textfield";
export interface AreaFilterValue {
    hidden?: string[];
    order?: string[];
}
export declare class HaAreaPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: AreaFilterValue;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): TemplateResult;
    private _edit;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-area-filter": HaAreaPicker;
    }
}
