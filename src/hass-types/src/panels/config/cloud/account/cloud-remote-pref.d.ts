import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import "../../../../components/ha-settings-row";
import "../../../../components/ha-switch";
import "../../../../components/ha-textfield";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare class CloudRemotePref extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    narrow: boolean;
    private _unmaskedUrl;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openCertInfo;
    private _toggleUnmaskedUrl;
    private _toggleChanged;
    private _toggleAllowRemoteEnabledChanged;
    private _copyURL;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-remote-pref": CloudRemotePref;
    }
}
