import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon";
import "./ha-svg-icon";
export interface ControlSelectOption {
    value: string;
    label?: string;
    icon?: TemplateResult;
    path?: string;
}
export declare class HaControlSelect extends LitElement {
    disabled: boolean;
    options?: ControlSelectOption[];
    value?: string;
    vertical: boolean;
    hideLabel: boolean;
    private _activeIndex?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _setupListeners;
    private _destroyListeners;
    private _handleFocus;
    private _handleBlur;
    private _handleKeydown;
    private _handleOptionClick;
    private _handleOptionMouseDown;
    private _handleOptionMouseUp;
    protected render(): TemplateResult<1>;
    private _renderOption;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-select": HaControlSelect;
    }
}
