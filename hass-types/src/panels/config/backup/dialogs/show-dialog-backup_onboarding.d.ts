import type { CloudStatus } from "../../../../data/cloud";
export interface BackupOnboardingDialogParams {
    submit?: (value: boolean) => void;
    cancel?: () => void;
    cloudStatus?: CloudStatus;
    skipWelcome?: boolean;
}
export declare const showBackupOnboardingDialog: (element: HTMLElement, params?: BackupOnboardingDialogParams) => Promise<boolean>;
