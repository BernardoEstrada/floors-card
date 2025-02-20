import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-circular-progress";
import type { AssistSatelliteConfiguration } from "../../data/assist_satellite";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepLocal extends LitElement {
    hass: HomeAssistant;
    assistConfiguration?: AssistSatelliteConfiguration;
    private _state;
    private _detailState?;
    private _error?;
    private _localTts?;
    private _localStt?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _prevStep;
    private _nextStep;
    private _checkLocal;
    private _findLocalEntities;
    private _setupConfigEntry;
    private _findConfigFlowInProgress;
    private _createConfigEntry;
    private _pickOrCreatePipelineExists;
    private _createPipeline;
    private _findEntitiesAndCreatePipeline;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-local": HaVoiceAssistantSetupStepLocal;
    }
}
