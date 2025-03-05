import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { AutomationClipboard } from "../../../../data/automation";
import type { Option } from "../../../../data/script";
import type { HomeAssistant } from "../../../../types";
import "./ha-automation-option-row";
export default class HaAutomationOption extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    disabled: boolean;
    options: Option[];
    private _showReorder;
    _clipboard?: AutomationClipboard;
    private _focusLastOptionOnChange;
    private _optionsKeys;
    private _unsubMql?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    expandAll(): void;
    private _addOption;
    private _getKey;
    private _moveUp;
    private _moveDown;
    private _move;
    private _optionMoved;
    private _optionAdded;
    private _optionRemoved;
    private _optionChanged;
    private _duplicateOption;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-option": HaAutomationOption;
    }
}
