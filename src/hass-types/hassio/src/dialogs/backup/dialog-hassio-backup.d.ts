import "@material/mwc-list/mwc-list-item";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../src/components/ha-md-dialog";
import "../../../../src/components/ha-dialog-header";
import "../../../../src/components/buttons/ha-progress-button";
import "../../../../src/components/ha-alert";
import "../../../../src/components/ha-button";
import "../../../../src/components/ha-button-menu";
import "../../../../src/components/ha-header-bar";
import "../../../../src/components/ha-icon-button";
import type { HassDialog } from "../../../../src/dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../src/types";
import "../../components/supervisor-backup-content";
import type { HassioBackupDialogParams } from "./show-dialog-hassio-backup";
declare class HassioBackupDialog extends LitElement implements HassDialog<HassioBackupDialogParams> {
    hass?: HomeAssistant;
    private _error?;
    private _backup?;
    private _dialogParams?;
    private _restoringBackup;
    private _backupContent;
    private _dialog?;
    showDialog(dialogParams: HassioBackupDialogParams): Promise<void>;
    private _dialogClosed;
    closeDialog(): boolean;
    private _localize;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleMenuAction;
    private _restoreClicked;
    private _deleteClicked;
    private _downloadClicked;
    private get _computeName();
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-hassio-backup": HassioBackupDialog;
    }
}
export {};
