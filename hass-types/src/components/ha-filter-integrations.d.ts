import "@material/mwc-list/mwc-list";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-domain-icon";
import "./search-input-outlined";
import "./ha-expansion-panel";
import "./ha-check-list-item";
export declare class HaFilterIntegrations extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    narrow: boolean;
    expanded: boolean;
    private _manifests?;
    private _shouldRender;
    private _filter?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    protected firstUpdated(): Promise<void>;
    private _integrations;
    private _handleItemClick;
    private _clearFilter;
    private _handleSearchChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-integrations": HaFilterIntegrations;
    }
}
