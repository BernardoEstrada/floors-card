import type { TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaTileInfo extends LitElement {
    primary?: string;
    secondary?: string | TemplateResult<1>;
    protected render(): TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-info": HaTileInfo;
    }
}
