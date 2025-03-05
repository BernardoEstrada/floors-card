import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-svg-icon";
export declare class HaHelpTooltip extends LitElement {
    label: string;
    position: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-help-tooltip": HaHelpTooltip;
    }
}
