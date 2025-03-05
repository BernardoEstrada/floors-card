import "@material/mwc-button/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-circular-progress";
import "../../../components/ha-dialog";
import type { HomeAssistant } from "../../../types";
import type { DialogStatisticsFixParams } from "./show-dialog-statistics-fix";
export declare class DialogStatisticsFix extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _clearing;
    showDialog(params: DialogStatisticsFixParams): void;
    closeDialog(): void;
    private _closeDialog;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cancel;
    private _clearStatistics;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-statistics-fix": DialogStatisticsFix;
    }
}
