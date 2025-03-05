import "@material/mwc-button";
import "@material/mwc-list/mwc-list-item";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-circular-progress";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-markdown-element";
import "../../../../components/ha-md-dialog";
import "../../../../components/ha-select";
import "../../../../components/ha-textarea";
import type { HomeAssistant } from "../../../../types";
export declare class DialogSupportPackage extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _supportPackage?;
    private _dialog?;
    showDialog(): void;
    private _dialogClosed;
    closeDialog(): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _loadSupportPackage;
    private _download;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-support-package": DialogSupportPackage;
    }
}
