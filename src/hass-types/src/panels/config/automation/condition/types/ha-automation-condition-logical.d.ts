import { LitElement } from "lit";
import type { LogicalCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import "../ha-automation-condition";
import type { ConditionElement } from "../ha-automation-condition-row";
export declare abstract class HaLogicalCondition extends LitElement implements ConditionElement {
    hass: HomeAssistant;
    condition: LogicalCondition;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-logical": HaLogicalCondition;
    }
}
