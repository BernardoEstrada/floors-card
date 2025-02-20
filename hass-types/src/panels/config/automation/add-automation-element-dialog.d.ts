import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-header";
import "../../../components/ha-md-divider";
import "../../../components/ha-domain-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-button-prev";
import "../../../components/ha-icon-next";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import "../../../components/ha-service-icon";
import "../../../components/search-input";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
declare class DialogAddAutomationElement extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    private _group?;
    private _prev?;
    private _filter;
    private _manifests?;
    private _domains?;
    private _dialog?;
    private _fullScreen;
    private _width?;
    private _height?;
    showDialog(params: any): void;
    closeDialog(): boolean;
    private _getGroups;
    private _convertToItem;
    private _getFilteredItems;
    private _getGroupItems;
    private _serviceGroups;
    private _services;
    private _fetchManifests;
    private _calculateUsedDomains;
    protected _opened(): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _back;
    private _selected;
    private _filterChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "add-automation-element-dialog": DialogAddAutomationElement;
    }
}
export {};
