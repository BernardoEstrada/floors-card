import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-md-list";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-md-select";
import "../../../../../components/ha-md-select-option";
import "../../../../../components/ha-md-textfield";
import "../../../../../components/ha-switch";
import type { BackupConfig } from "../../../../../data/backup";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-time-input";
import "../../../../../components/ha-tip";
import "../../../../../components/ha-expansion-panel";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-formfield";
export type BackupConfigSchedule = Pick<BackupConfig, "schedule" | "retention">;
declare class HaBackupConfigSchedule extends LitElement {
    hass: HomeAssistant;
    value?: BackupConfigSchedule;
    private _retentionPreset?;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _getData;
    private _setData;
    protected render(): import("lit-html").TemplateResult<1>;
    private _scheduleChanged;
    private _scheduleTimeChanged;
    private _timeChanged;
    private _daysChanged;
    private _retentionPresetChanged;
    private _retentionValueChanged;
    private _retentionTypeChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-config-schedule": HaBackupConfigSchedule;
    }
}
export {};
