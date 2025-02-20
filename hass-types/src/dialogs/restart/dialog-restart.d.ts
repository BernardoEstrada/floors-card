import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-circular-progress";
import "../../components/ha-md-dialog";
import "../../components/ha-md-list";
import "../../components/ha-expansion-panel";
import "../../components/ha-md-list-item";
import "../../components/ha-icon-button";
import "../../components/ha-icon-next";
import type { HomeAssistant } from "../../types";
declare class DialogRestart extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _loadingHostInfo;
    private _hostInfo?;
    private _dialog?;
    showDialog(): Promise<void>;
    private _dialogClosed;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _reload;
    private _showRestartDialog;
    private _showRestartSafeModeDialog;
    private _hostReboot;
    private _hostShutdown;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-restart": DialogRestart;
    }
}
export {};
