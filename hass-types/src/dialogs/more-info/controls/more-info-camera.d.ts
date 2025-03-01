import { LitElement, nothing } from "lit";
import "../../../components/ha-camera-stream";
import type { CameraEntity } from "../../../data/camera";
import type { HomeAssistant } from "../../../types";
import "../../../components/buttons/ha-progress-button";
declare class MoreInfoCamera extends LitElement {
    hass: HomeAssistant;
    stateObj?: CameraEntity;
    private _attached;
    private _waiting;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _downloadSnapshot;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-camera": MoreInfoCamera;
    }
}
export {};
