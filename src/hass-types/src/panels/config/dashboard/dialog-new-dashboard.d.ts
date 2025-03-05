import "@material/mwc-list/mwc-list";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-next";
import "../../../components/ha-list-item";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { NewDashboardDialogParams } from "./show-dialog-new-dashboard";
declare class DialogNewDashboard extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _params?;
    showDialog(params: NewDashboardDialogParams): void;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _generateStrategyConfig;
    private _selected;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-new-dashboard": DialogNewDashboard;
    }
}
export {};
