import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-icon";
import "../ha-svg-icon";
export declare class HaTileIcon extends LitElement {
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-icon": HaTileIcon;
    }
}
