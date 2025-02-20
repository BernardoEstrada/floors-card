import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-alert";
import type { HomeAssistant } from "../../../../types";
import type { LocalBackupLocationDialogParams } from "./show-dialog-local-backup-location";
declare class LocalBackupLocationDialog extends LitElement {
    hass: HomeAssistant;
    private _dialogParams?;
    private _data?;
    private _waiting?;
    private _error?;
    showDialog(dialogParams: LocalBackupLocationDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
    private _valueChanged;
    private _changeMount;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-local-backup-location": LocalBackupLocationDialog;
    }
}
export {};
