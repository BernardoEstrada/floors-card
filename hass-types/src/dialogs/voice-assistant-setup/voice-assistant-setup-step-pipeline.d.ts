import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { AssistSatelliteConfiguration } from "../../data/assist_satellite";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepPipeline extends LitElement {
    hass: HomeAssistant;
    assistConfiguration?: AssistSatelliteConfiguration;
    deviceId: string;
    assistEntityId?: string;
    private _cloudChecked;
    private _showFirst;
    private _showSecond;
    private _showThird;
    private _showFourth;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _checkCloud;
    private _setupCloud;
    private _setupLocal;
    private _nextStep;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-pipeline": HaVoiceAssistantSetupStepPipeline;
    }
}
