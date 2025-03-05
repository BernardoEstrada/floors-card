import { type CSSResultGroup, LitElement } from "lit";
import "../../../../../components/ha-button";
import type { ChooseAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import "../../option/ha-automation-option";
import type { ActionElement } from "../ha-automation-action-row";
import "../ha-automation-action";
export declare class HaChooseAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: ChooseAction;
    private _showDefault;
    static get defaultConfig(): ChooseAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addDefault;
    private _optionsChanged;
    private _defaultChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-choose": HaChooseAction;
    }
}
