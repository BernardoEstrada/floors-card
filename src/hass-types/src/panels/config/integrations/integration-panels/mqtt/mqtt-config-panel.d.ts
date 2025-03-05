import "@material/mwc-button";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-code-editor";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-switch";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
import "./mqtt-subscribe-card";
export declare class MQTTConfigPanel extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _topic;
    private _payload;
    private _qos;
    private _retain;
    private _allowTemplate;
    protected render(): TemplateResult;
    private _handleTopic;
    private _handlePayload;
    private _handleQos;
    private _handleRetain;
    private _handleAllowTemplate;
    private _publish;
    private _openOptionFlow;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "mqtt-config-panel": MQTTConfigPanel;
    }
}
