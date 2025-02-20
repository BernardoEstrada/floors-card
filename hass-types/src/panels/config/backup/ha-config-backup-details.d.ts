import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-circular-progress";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import type { BackupAgent, BackupConfig } from "../../../data/backup";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "./components/ha-backup-data-picker";
declare class HaConfigBackupDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    backupId: string;
    config?: BackupConfig;
    agents: BackupAgent[];
    private _backup?;
    private _agents;
    private _error?;
    private _selectedData?;
    private _addonsInfo?;
    protected firstUpdated(changedProps: any): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _selectedBackupChanged;
    private _isRestoreDisabled;
    private _restore;
    private _fetchBackup;
    private _handleAction;
    private _handleAgentAction;
    private _downloadBackup;
    private _deleteBackup;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-details": HaConfigBackupDetails;
    }
}
export {};
