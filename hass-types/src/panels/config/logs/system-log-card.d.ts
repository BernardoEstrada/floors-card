import "@material/mwc-list/mwc-list";
import { LitElement } from "lit";
import "../../../components/buttons/ha-call-service-button";
import "../../../components/buttons/ha-progress-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-circular-progress";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import type { HomeAssistant } from "../../../types";
export declare class SystemLogCard extends LitElement {
    hass: HomeAssistant;
    filter: string;
    header?: string;
    loaded: boolean;
    private _items?;
    fetchData(): Promise<void>;
    private _timestamp;
    private _multipleMessages;
    private _getFilteredItems;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: any): void;
    protected serviceCalled(ev: any): void;
    private _handleOverflowAction;
    private _downloadLogs;
    private _openLog;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "system-log-card": SystemLogCard;
    }
}
