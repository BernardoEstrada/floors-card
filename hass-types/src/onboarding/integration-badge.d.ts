import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/ha-svg-icon";
declare class IntegrationBadge extends LitElement {
    domain: string;
    title: string;
    darkOptimizedIcon: boolean;
    clickable: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "integration-badge": IntegrationBadge;
    }
}
export {};
