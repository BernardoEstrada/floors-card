export interface ZWaveJSRemoveNodeDialogParams {
    entry_id: string;
    skipConfirmation?: boolean;
    removedCallback?: () => void;
}
export declare const loadRemoveNodeDialog: () => Promise<typeof import("./dialog-zwave_js-remove-node")>;
export declare const showZWaveJSRemoveNodeDialog: (element: HTMLElement, removeNodeDialogParams: ZWaveJSRemoveNodeDialogParams) => void;
