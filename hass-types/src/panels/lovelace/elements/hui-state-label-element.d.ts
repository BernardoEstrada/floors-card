import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-warning-element";
import type { LovelaceElement, StateLabelElementConfig } from "./types";
import type { LovelacePictureElementEditor } from "../types";
declare class HuiStateLabelElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): StateLabelElementConfig;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: StateLabelElementConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-element": HuiStateLabelElement;
    }
}
export {};
