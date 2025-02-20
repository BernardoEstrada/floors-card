import { LitElement } from "lit";
import "../../../../../components/ha-select";
import type { Condition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import "../../condition/ha-automation-condition-editor";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaConditionAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: Condition;
    static get defaultConfig(): Omit<Condition, "state" | "entity_id">;
    protected render(): import("lit-html").TemplateResult<1>;
    private _processedTypes;
    private _conditionChanged;
    private _typeChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-condition": HaConditionAction;
    }
}
