import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { AutomationClipboard, Trigger } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "./ha-automation-trigger-row";
export default class HaAutomationTrigger extends LitElement {
    hass: HomeAssistant;
    triggers: Trigger[];
    disabled: boolean;
    private _showReorder;
    _clipboard?: AutomationClipboard;
    private _focusLastTriggerOnChange;
    private _triggerKeys;
    private _unsubMql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addTriggerDialog;
    private _addTrigger;
    protected updated(changedProps: PropertyValues): void;
    expandAll(): void;
    private _getKey;
    private _moveUp;
    private _moveDown;
    private _move;
    private _triggerMoved;
    private _triggerAdded;
    private _triggerRemoved;
    private _triggerChanged;
    private _duplicateTrigger;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger": HaAutomationTrigger;
    }
}
