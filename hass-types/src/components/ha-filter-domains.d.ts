import "@material/mwc-list/mwc-list";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-domain-icon";
import "./ha-expansion-panel";
import "./ha-check-list-item";
import "./search-input-outlined";
export declare class HaFilterDomains extends LitElement {
    hass: HomeAssistant;
    value?: string[];
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    private _filter?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _domains;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _handleItemClick;
    private _clearFilter;
    private _handleSearchChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-domains": HaFilterDomains;
    }
}
