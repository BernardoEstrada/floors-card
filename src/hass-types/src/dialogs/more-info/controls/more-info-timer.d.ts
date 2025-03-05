import "@material/mwc-button";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import type { TimerEntity } from "../../../data/timer";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoTimer extends LitElement {
    hass: HomeAssistant;
    stateObj?: TimerEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleActionClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-timer": MoreInfoTimer;
    }
}
export {};
