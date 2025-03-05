import "@material/mwc-list/mwc-list-item";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { User } from "../../data/user";
import type { HomeAssistant } from "../../types";
import "../ha-select";
import "./ha-user-badge";
import "../ha-list-item";
declare class HaUserPicker extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    noUserLabel?: string;
    value: string;
    users?: User[];
    disabled: boolean;
    private _sortedUsers;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    private _userChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-user-picker": HaUserPicker;
    }
}
export {};
