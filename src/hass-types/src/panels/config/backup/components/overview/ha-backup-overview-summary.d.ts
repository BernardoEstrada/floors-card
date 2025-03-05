import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-icon-button";
import type { BackupConfig, BackupContent } from "../../../../../data/backup";
import type { HomeAssistant } from "../../../../../types";
import "../ha-backup-summary-card";
declare class HaBackupOverviewBackups extends LitElement {
    hass: HomeAssistant;
    backups: BackupContent[];
    config: BackupConfig;
    fetching: boolean;
    private _sortedBackups;
    private _lastBackup;
    private _lastUploadedBackup;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderNextBackupDescription;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-summary": HaBackupOverviewBackups;
    }
}
export {};
