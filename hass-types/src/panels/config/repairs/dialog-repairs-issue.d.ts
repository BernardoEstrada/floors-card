import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-md-dialog";
import "../../../components/ha-button";
import "../../../components/ha-dialog-header";
import "./dialog-repairs-issue-subtitle";
import "../../../components/ha-markdown";
import type { HomeAssistant } from "../../../types";
import type { RepairsIssueDialogParams } from "./show-repair-issue-dialog";
declare class DialogRepairsIssue extends LitElement {
    hass: HomeAssistant;
    private _issue?;
    private _params?;
    private _dialog?;
    showDialog(params: RepairsIssueDialogParams): void;
    private _dialogClosed;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _ignoreIssue;
    private _clickHandler;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-repairs-issue": DialogRepairsIssue;
    }
}
export {};
