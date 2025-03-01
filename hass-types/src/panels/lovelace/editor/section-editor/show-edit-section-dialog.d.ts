import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
export interface EditSectionDialogParams {
    lovelaceConfig: LovelaceConfig;
    saveConfig: (config: LovelaceConfig) => void;
    viewIndex: number;
    sectionIndex: number;
}
export declare const showEditSectionDialog: (element: HTMLElement, editSectionDialogParams: EditSectionDialogParams) => void;
