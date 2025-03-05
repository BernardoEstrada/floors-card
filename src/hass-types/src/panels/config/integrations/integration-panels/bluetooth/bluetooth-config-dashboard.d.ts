import "@material/mwc-button";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-code-editor";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-switch";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-metric";
export declare class BluetoothConfigDashboard extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _connectionAllocationData;
    private _connectionAllocationsError?;
    private _configEntry;
    private _unsubConnectionAllocations?;
    connectedCallback(): void;
    private _subscribeBluetoothConnectionAllocations;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _getUsedAllocations;
    private _renderConnectionAllocations;
    private _openOptionFlow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "bluetooth-config-dashboard": BluetoothConfigDashboard;
    }
}
