import { LitElement, nothing } from "lit";
import "../components/ha-button";
import "../components/ha-toast";
import "../components/ha-icon-button";
import type { HomeAssistant } from "../types";
export interface ShowToastParams {
    id?: string;
    message: string;
    action?: ToastActionParams;
    duration?: number;
    dismissable?: boolean;
}
export interface ToastActionParams {
    action: () => void;
    text: string;
}
declare class NotificationManager extends LitElement {
    hass: HomeAssistant;
    private _parameters?;
    private _toast;
    showDialog(parameters: ShowToastParams): Promise<void>;
    private _toastClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _buttonClicked;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-manager": NotificationManager;
    }
    interface HASSDomEvents {
        "hass-notification": ShowToastParams;
    }
}
export {};
