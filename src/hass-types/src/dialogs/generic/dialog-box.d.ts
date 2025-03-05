import { LitElement, nothing } from "lit";
import "../../components/ha-md-dialog";
import "../../components/ha-dialog-header";
import "../../components/ha-svg-icon";
import "../../components/ha-button";
import "../../components/ha-textfield";
import type { HomeAssistant } from "../../types";
import type { DialogBoxParams } from "./show-dialog-box";
declare class DialogBox extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _closeState?;
    private _textField?;
    private _dialog?;
    private _closePromise?;
    private _closeResolve?;
    showDialog(params: DialogBoxParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cancel;
    private _dismiss;
    private _confirm;
    private _closeDialog;
    private _dialogClosed;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-box": DialogBox;
    }
}
export {};
