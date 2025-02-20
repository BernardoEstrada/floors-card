import "@material/mwc-button";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { LitElement, nothing } from "lit";
import "../../components/ha-markdown";
import "../../components/ha-relative-time";
import type { PersistentNotification } from "../../data/persistent_notification";
import type { HomeAssistant } from "../../types";
import "./notification-item-template";
export declare class HuiPersistentNotificationItem extends LitElement {
    hass?: HomeAssistant;
    notification?: PersistentNotification;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _handleDismiss;
    private _computeTooltip;
}
declare global {
    interface HTMLElementTagNameMap {
        "persistent-notification-item": HuiPersistentNotificationItem;
    }
}
