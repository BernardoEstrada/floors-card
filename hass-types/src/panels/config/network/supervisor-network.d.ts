import "@material/mwc-list/mwc-list";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { type CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-circular-progress";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-formfield";
import "../../../components/ha-icon-button";
import "../../../components/ha-password-field";
import "../../../components/ha-radio";
import "../../../components/ha-list-item";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
export declare class HassioNetwork extends LitElement {
    hass: HomeAssistant;
    private _accessPoints;
    private _curTabIndex;
    private _dirty;
    private _interface?;
    private _interfaces;
    private _processing;
    private _scanning;
    private _wifiConfiguration?;
    private _dnsMenuOpen;
    protected firstUpdated(): void;
    private _fetchNetworkInfo;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderTab;
    private _selectAP;
    private _scanForAP;
    private _renderIPConfiguration;
    private _updateNetwork;
    private _clear;
    private _handleTabActivated;
    private _handleRadioValueChanged;
    private _handleRadioValueChangedAp;
    private _handleInputValueChanged;
    private _handleInputValueChangedWifi;
    private _addAddress;
    private _removeAddress;
    private _handleDNSMenuOpened;
    private _handleDNSMenuClosed;
    private _addPredefinedDNS;
    private _addCustomDNS;
    private _removeNameserver;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-network": HassioNetwork;
    }
}
