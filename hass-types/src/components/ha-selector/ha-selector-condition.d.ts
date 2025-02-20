import { LitElement } from "lit";
import type { Condition } from "../../data/automation";
import type { ConditionSelector } from "../../data/selector";
import "../../panels/config/automation/condition/ha-automation-condition";
import type { HomeAssistant } from "../../types";
export declare class HaConditionSelector extends LitElement {
    hass: HomeAssistant;
    selector: ConditionSelector;
    value?: Condition;
    label?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-condition": HaConditionSelector;
    }
}
