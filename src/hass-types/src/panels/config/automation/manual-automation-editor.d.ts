import "@material/mwc-button/mwc-button";
import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-markdown";
import type { ManualAutomationConfig } from "../../../data/automation";
import type { HomeAssistant } from "../../../types";
import "./action/ha-automation-action";
import "./condition/ha-automation-condition";
import "./trigger/ha-automation-trigger";
export declare class HaManualAutomationEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    disabled: boolean;
    config: ManualAutomationConfig;
    stateObj?: HassEntity;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _clearParam;
    protected render(): import("lit-html").TemplateResult<1>;
    private _triggerChanged;
    private _conditionChanged;
    private _actionChanged;
    private _enable;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "manual-automation-editor": HaManualAutomationEditor;
    }
}
