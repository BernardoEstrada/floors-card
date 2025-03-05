import "@material/mwc-button";
import "@material/mwc-list/mwc-list-item";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-select";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-switch";
import "../../../../components/ha-language-picker";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare class CloudTTSPref extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    private savingPreferences;
    private ttsInfo?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: any): void;
    protected willUpdate(changedProps: any): void;
    private getLanguages;
    private getSupportedVoices;
    private _openTryDialog;
    private _handleLanguageChange;
    private _handleVoiceChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-tts-pref": CloudTTSPref;
    }
}
