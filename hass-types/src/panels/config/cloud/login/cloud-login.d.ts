import "@material/mwc-button";
import "@material/mwc-list/mwc-list";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/buttons/ha-progress-button";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-list-item";
import "../../../../components/ha-password-field";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-textfield";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
import "../../ha-config-section";
export declare class CloudLogin extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    email?: string;
    flashMessage?: string;
    private _password?;
    private _requestInProgress;
    private _error?;
    private _emailField;
    private _passwordField;
    protected render(): TemplateResult;
    private _keyDown;
    private _handleLogin;
    private _handleRegister;
    private _handleForgotPassword;
    private _dismissFlash;
    private _handleMenuAction;
    private _deleteCloudData;
    private _downloadSupportPackage;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-login": CloudLogin;
    }
}
