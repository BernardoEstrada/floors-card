import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-circular-progress";
import type { HomeAssistant } from "../../types";
export declare class HaVoiceAssistantSetupStepUpdate extends LitElement {
    hass: HomeAssistant;
    updateEntityId?: string;
    private _updated;
    private _refreshTimeout?;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _tryUpdate;
    private _nextStep;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-update": HaVoiceAssistantSetupStepUpdate;
    }
}
