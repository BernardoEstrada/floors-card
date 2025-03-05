import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-toggle";
import "../../../components/ha-humidifier-state";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiHumidifierEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-entity-row": HuiHumidifierEntityRow;
    }
}
export {};
