import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import type { IfAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import "../ha-automation-action";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaIfAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: IfAction;
    private _showElse;
    static get defaultConfig(): IfAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addElse;
    private _ifChanged;
    private _thenChanged;
    private _elseChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-if": HaIfAction;
    }
}
