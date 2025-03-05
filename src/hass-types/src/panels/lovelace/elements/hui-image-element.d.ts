import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "../components/hui-image";
import type { ImageElementConfig, LovelaceElement } from "./types";
import type { LovelacePictureElementEditor } from "../types";
export declare class HuiImageElement extends LitElement implements LovelaceElement {
    static getConfigElement(): Promise<LovelacePictureElementEditor>;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ImageElementConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-image-element": HuiImageElement;
    }
}
