import "@material/mwc-button/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import "../../../../../components/ha-alert";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSRemoveNodeDialogParams } from "./show-dialog-zwave_js-remove-node";
export interface ZWaveJSRemovedNode {
    node_id: number;
    manufacturer: string;
    label: string;
}
declare class DialogZWaveJSRemoveNode extends LitElement {
    hass: HomeAssistant;
    private entry_id?;
    private _status;
    private _node?;
    private _removedCallback?;
    private _removeNodeTimeoutHandle?;
    private _subscribed?;
    private _error?;
    disconnectedCallback(): void;
    showDialog(params: ZWaveJSRemoveNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startExclusion;
    private _handleMessage;
    private _unsubscribe;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-remove-node": DialogZWaveJSRemoveNode;
    }
}
export {};
