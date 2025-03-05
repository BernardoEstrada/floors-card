import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../state-control/climate/ha-state-control-climate-temperature";
import type { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { ThermostatCardConfig } from "./types";
export declare class HuiThermostatCard extends LitElement implements LovelaceCard {
    private _resizeController;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): ThermostatCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: ThermostatCardConfig): void;
    private _handleMoreInfo;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    getGridOptions(): LovelaceGridOptions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-thermostat-card": HuiThermostatCard;
    }
}
