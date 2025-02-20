import type { LocalizeFunc } from "../../../../src/common/translations/localize";
import type { Supervisor } from "../../../../src/data/supervisor/supervisor";
export interface HassioBackupDialogParams {
    slug: string;
    onDelete?: () => void;
    onRestoring?: () => void;
    onboarding?: boolean;
    supervisor?: Supervisor;
    localize?: LocalizeFunc;
}
export declare const showHassioBackupDialog: (element: HTMLElement, dialogParams: HassioBackupDialogParams) => void;
