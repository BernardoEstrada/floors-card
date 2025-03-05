import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-header";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { SystemLogDetailDialogParams } from "./show-dialog-system-log-detail";
declare class DialogSystemLogDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _manifest?;
    showDialog(params: SystemLogDetailDialogParams): Promise<void>;
    closeDialog(): void;
    protected updated(changedProps: any): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get isCustomIntegration();
    private _fetchManifest;
    private _copyLog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-system-log-detail": DialogSystemLogDetail;
    }
}
export {};
