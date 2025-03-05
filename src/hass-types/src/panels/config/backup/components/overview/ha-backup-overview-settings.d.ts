import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-svg-icon";
import type { BackupAgent, BackupConfig } from "../../../../../data/backup";
import type { HomeAssistant } from "../../../../../types";
declare class HaBackupBackupsSummary extends LitElement {
    hass: HomeAssistant;
    config: BackupConfig;
    agents: BackupAgent[];
    private _configure;
    private _scheduleDescription;
    private _addonsDescription;
    private _locationsDescription;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-settings": HaBackupBackupsSummary;
    }
}
export {};
