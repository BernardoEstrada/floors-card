import "@material/mwc-button";
import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-relative-time";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoAutomation extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _runActions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-automation": MoreInfoAutomation;
    }
}
export {};
