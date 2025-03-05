import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../hassio/src/components/hassio-upload-backup";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-ansi-to-html";
import "../components/ha-card";
import "../components/ha-alert";
import "../components/ha-button";
import type { HomeAssistant } from "../types";
import "./onboarding-loading";
declare class OnboardingRestoreBackup extends LitElement {
    hass?: HomeAssistant;
    localize: LocalizeFunc;
    language: string;
    private _restoring;
    private _backupSlug?;
    protected render(): TemplateResult;
    private _back;
    private _backupUploaded;
    private _backupCleared;
    protected firstUpdated(changedProps: any): void;
    private _checkRestoreStatus;
    private _scheduleCheckRestoreStatus;
    private _showBackupDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-restore-backup": OnboardingRestoreBackup;
    }
}
export {};
