import "@material/mwc-button/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-circular-progress";
import type { HomeAssistant } from "../../../../../types";
import type { MatterReinterviewNodeDialogParams } from "./show-dialog-matter-reinterview-node";
declare class DialogMatterReinterviewNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    showDialog(params: MatterReinterviewNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startReinterview;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-reinterview-node": DialogMatterReinterviewNode;
    }
}
export {};
