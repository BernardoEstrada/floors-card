import "@material/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../types";
import type { HomeZoneDetailDialogParams } from "./show-dialog-home-zone-detail";
declare class DialogHomeZoneDetail extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _data?;
    private _params?;
    private _submitting;
    showDialog(params: HomeZoneDetailDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _formData;
    private _valueChanged;
    private _computeLabel;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-home-zone-detail": DialogHomeZoneDetail;
    }
}
export {};
