import "@material/mwc-list/mwc-list";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-dialog";
import "../../components/ha-icon-button";
import "../../components/ha-list-item";
import "../../components/ha-sortable";
import type { HomeAssistant } from "../../types";
import type { HassDialog } from "../make-dialog-manager";
import type { AreaFilterDialogParams } from "./show-area-filter-dialog";
export declare class DialogAreaFilter extends LitElement implements HassDialog<AreaFilterDialogParams> {
    hass?: HomeAssistant;
    private _dialogParams?;
    private _hidden;
    private _areas;
    showDialog(dialogParams: AreaFilterDialogParams): void;
    closeDialog(): boolean;
    private _submit;
    private _cancel;
    private _areaMoved;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _toggle;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-area-filter": DialogAreaFilter;
    }
}
