import "@material/mwc-button/mwc-button";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-button-menu";
import "../../components/ha-dialog";
import "../../components/ha-dialog-header";
import "../../components/ha-icon-button";
import "../../components/ha-list-item";
import "../../components/ha-alert";
import "../../components/ha-assist-chat";
import "../../components/ha-circular-progress";
import type { HomeAssistant } from "../../types";
import type { VoiceCommandDialogParams } from "./show-ha-voice-command-dialog";
export declare class HaVoiceCommandDialog extends LitElement {
    hass: HomeAssistant;
    private _opened;
    private _pipelineId?;
    private _pipeline?;
    private _pipelines?;
    private _preferredPipeline?;
    private _errorLoadAssist?;
    private _startListening;
    showDialog(params: Required<VoiceCommandDialogParams>): Promise<void>;
    closeDialog(): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _loadPipelines;
    private _selectPipeline;
    private _getPipeline;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-command-dialog": HaVoiceCommandDialog;
    }
}
