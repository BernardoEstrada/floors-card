import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../../../src/common/translations/localize";
import "../../../src/components/ha-checkbox";
import "../../../src/components/ha-formfield";
import "../../../src/components/ha-textfield";
import "../../../src/components/ha-password-field";
import "../../../src/components/ha-radio";
import type { HassioBackupDetail, HassioFullBackupCreateParams, HassioPartialBackupCreateParams } from "../../../src/data/hassio/backup";
import type { Supervisor } from "../../../src/data/supervisor/supervisor";
import type { HomeAssistant } from "../../../src/types";
import "./supervisor-formfield-label";
interface CheckboxItem {
    slug: string;
    checked: boolean;
    name: string;
}
interface AddonCheckboxItem extends CheckboxItem {
    version: string;
}
export declare class SupervisorBackupContent extends LitElement {
    hass?: HomeAssistant;
    localize?: LocalizeFunc;
    supervisor?: Supervisor;
    backup?: HassioBackupDetail;
    backupType: HassioBackupDetail["type"];
    folders?: CheckboxItem[];
    addons?: AddonCheckboxItem[];
    homeAssistant: boolean;
    backupHasPassword: boolean;
    onboarding: boolean;
    backupName: string;
    backupPassword: string;
    confirmBackupPassword: string;
    private _focusTarget;
    willUpdate(changedProps: any): void;
    focus(): void;
    private _localize;
    protected render(): typeof nothing | TemplateResult<1>;
    private _toggleHomeAssistant;
    static styles: import("lit").CSSResult;
    backupDetails(): HassioPartialBackupCreateParams | HassioFullBackupCreateParams;
    private _getSection;
    private _handleRadioValueChanged;
    private _handleTextValueChanged;
    private _toggleHasPassword;
    private _toggleSection;
    private _updateSectionEntry;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-backup-content": SupervisorBackupContent;
    }
}
export {};
