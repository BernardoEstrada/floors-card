import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-svg-icon";
declare class HaDataTableIcon extends LitElement {
    tooltip: string;
    path: string;
    private _hovered;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table-icon": HaDataTableIcon;
    }
}
export {};
