import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import type { HomeAssistant } from "../../../types";
export declare const createEntityNotFoundWarning: (hass: HomeAssistant, entityId: string) => string;
export declare class HuiWarning extends LitElement {
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-warning": HuiWarning;
    }
}
