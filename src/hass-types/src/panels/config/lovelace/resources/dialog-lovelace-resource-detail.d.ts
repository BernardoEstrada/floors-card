import "@material/mwc-button/mwc-button";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-md-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceResourceDetailsDialogParams } from "./show-dialog-lovelace-resource-detail";
export declare class DialogLovelaceResourceDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _data?;
    private _error?;
    private _submitting;
    private _dialog?;
    showDialog(params: LovelaceResourceDetailsDialogParams): void;
    private _dialogClosed;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _schema;
    private _computeLabel;
    private _valueChanged;
    private _updateResource;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-lovelace-resource-detail": DialogLovelaceResourceDetail;
    }
}
