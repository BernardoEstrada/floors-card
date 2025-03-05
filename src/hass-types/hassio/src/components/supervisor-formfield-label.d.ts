import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../src/components/ha-svg-icon";
declare class SupervisorFormfieldLabel extends LitElement {
    label: string;
    imageUrl?: string;
    iconPath?: string;
    version?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-formfield-label": SupervisorFormfieldLabel;
    }
}
export {};
