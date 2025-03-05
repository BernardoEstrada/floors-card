import { LitElement } from "lit";
import type { Action } from "../../data/script";
import type { ActionSelector } from "../../data/selector";
import "../../panels/config/automation/action/ha-automation-action";
import type { HomeAssistant } from "../../types";
export declare class HaActionSelector extends LitElement {
    hass: HomeAssistant;
    selector: ActionSelector;
    value?: Action;
    label?: string;
    disabled: boolean;
    private _actions;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-action": HaActionSelector;
    }
}
