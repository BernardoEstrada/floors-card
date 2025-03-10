import "@material/mwc-button";
import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import "../../../components/map/ha-map";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoPerson extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    private _entityArray;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-person": MoreInfoPerson;
    }
}
export {};
