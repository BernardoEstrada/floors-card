import "@material/mwc-list/mwc-list";
import "@material/mwc-button/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import "../../../../../components/ha-list-item";
import type { HomeAssistant } from "../../../../../types";
import type { MatterPingNodeDialogParams } from "./show-dialog-matter-ping-node";
declare class DialogMatterPingNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _pingResultEntries?;
    showDialog(params: MatterPingNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startPing;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-ping-node": DialogMatterPingNode;
    }
}
export {};
