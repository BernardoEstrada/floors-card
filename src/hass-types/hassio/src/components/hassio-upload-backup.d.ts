import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../src/components/ha-circular-progress";
import "../../../src/components/ha-file-upload";
import type { HassioBackup } from "../../../src/data/hassio/backup";
import type { HomeAssistant } from "../../../src/types";
import type { LocalizeFunc } from "../../../src/common/translations/localize";
declare global {
    interface HASSDomEvents {
        "backup-uploaded": {
            backup: HassioBackup;
        };
        "backup-cleared": undefined;
    }
}
export declare class HassioUploadBackup extends LitElement {
    hass?: HomeAssistant;
    localize?: LocalizeFunc;
    value: string | null;
    private _uploading;
    render(): TemplateResult;
    private _clear;
    private _uploadFile;
}
declare global {
    interface HTMLElementTagNameMap {
        "hassio-upload-backup": HassioUploadBackup;
    }
}
