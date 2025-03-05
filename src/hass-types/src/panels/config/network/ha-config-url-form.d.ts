import "@material/mwc-button/mwc-button";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-formfield";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import "../../../components/ha-settings-row";
import "../../../components/ha-button";
import type { HomeAssistant } from "../../../types";
declare class ConfigUrlForm extends LitElement {
    hass: HomeAssistant;
    private _error?;
    private _working;
    private _urls?;
    private _external_url;
    private _internal_url;
    private _cloudStatus?;
    private _showCustomExternalUrl;
    private _showCustomInternalUrl;
    private _unmaskedExternalUrl;
    private _unmaskedInternalUrl;
    private _cloudChecked;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _toggleCloud;
    private _toggleInternalAutomatic;
    private _toggleUnmaskedInternalUrl;
    private _toggleUnmaskedExternalUrl;
    private _copyURL;
    private _handleChange;
    private _save;
    private _fetchUrls;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-url-form": ConfigUrlForm;
    }
}
export {};
