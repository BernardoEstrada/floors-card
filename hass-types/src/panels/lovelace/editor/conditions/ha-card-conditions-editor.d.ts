import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-list-item";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { Condition, LegacyCondition } from "../../common/validate-condition";
import "./ha-card-condition-editor";
import "./types/ha-card-condition-and";
import "./types/ha-card-condition-numeric_state";
import "./types/ha-card-condition-or";
import "./types/ha-card-condition-screen";
import "./types/ha-card-condition-state";
import "./types/ha-card-condition-user";
export declare class HaCardConditionsEditor extends LitElement {
    hass: HomeAssistant;
    conditions: (Condition | LegacyCondition)[];
    private _focusLastConditionOnChange;
    protected firstUpdated(): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addCondition;
    private _conditionChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-conditions-editor": HaCardConditionsEditor;
    }
}
