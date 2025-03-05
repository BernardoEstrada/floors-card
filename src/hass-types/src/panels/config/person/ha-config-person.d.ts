import "@material/mwc-list/mwc-list";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-fab";
import "../../../components/ha-svg-icon";
import "../../../components/ha-list-item";
import "../../../components/user/ha-person-badge";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "../ha-config-section";
export declare class HaConfigPerson extends LitElement {
    hass?: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _storageItems?;
    private _configItems?;
    private _usersLoad?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: any): void;
    private _fetchData;
    private _openDialogIfPersonSpecifiedInRoute;
    private _createPerson;
    private _openEditEntry;
    private _allowedUsers;
    private _openDialog;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-person": HaConfigPerson;
    }
}
