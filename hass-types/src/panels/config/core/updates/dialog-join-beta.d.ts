import "@material/mwc-button/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { JoinBetaDialogParams } from "./show-dialog-join-beta";
export declare class DialogJoinBeta extends LitElement implements HassDialog<JoinBetaDialogParams> {
    hass: HomeAssistant;
    private _dialogParams?;
    showDialog(dialogParams: JoinBetaDialogParams): void;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cancel;
    private _join;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-join-beta": DialogJoinBeta;
    }
}
