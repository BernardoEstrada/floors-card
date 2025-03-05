import "@material/mwc-button";
import "@material/mwc-list/mwc-list-item";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-select";
import "../../../../components/ha-textarea";
import type { HomeAssistant } from "../../../../types";
import type { TryTtsDialogParams } from "./show-dialog-cloud-tts-try";
export declare class DialogTryTts extends LitElement {
    hass: HomeAssistant;
    private _loadingExample;
    private _params?;
    private _messageInput?;
    private _message;
    private _target;
    showDialog(params: TryTtsDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleTargetChanged;
    private _playExample;
    private _createAutomation;
    private _playBrowser;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-try-tts": DialogTryTts;
    }
}
