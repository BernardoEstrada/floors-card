import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../state-display/ha-timer-remaining-time";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig } from "./types";
declare class HuiTimerEntityRow extends LitElement {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-timer-entity-row": HuiTimerEntityRow;
    }
}
export {};
