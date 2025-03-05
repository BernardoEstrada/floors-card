import "@material/mwc-button/mwc-button";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { ToggleButton } from "../types";
import "./ha-icon-button";
export declare class HaButtonToggleGroup extends LitElement {
    buttons: ToggleButton[];
    active?: string;
    fullWidth: boolean;
    dense: boolean;
    private _buttons?;
    protected render(): TemplateResult;
    protected updated(): void;
    private _handleClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button-toggle-group": HaButtonToggleGroup;
    }
}
