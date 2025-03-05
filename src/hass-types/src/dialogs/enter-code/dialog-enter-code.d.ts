import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-control-button";
import "../../components/ha-textfield";
import type { HomeAssistant } from "../../types";
import type { HassDialog } from "../make-dialog-manager";
import type { EnterCodeDialogParams } from "./show-enter-code-dialog";
export declare class DialogEnterCode extends LitElement implements HassDialog<EnterCodeDialogParams> {
    hass?: HomeAssistant;
    private _dialogParams?;
    private _input?;
    private _showClearButton;
    showDialog(dialogParams: EnterCodeDialogParams): Promise<void>;
    closeDialog(): boolean;
    private _submit;
    private _cancel;
    private _numberClick;
    private _clear;
    private _inputValueChange;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-enter-code": DialogEnterCode;
    }
}
