import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { nothing, TemplateResult } from "lit";
import type { FlowType } from "../../../data/data_entry_flow";
import type { HomeAssistant } from "../../../types";
import "./entity-preview-row";
import "../../../components/ha-alert";
export declare class FlowPreviewGeneric extends LitElement {
    hass: HomeAssistant;
    flowType: FlowType;
    handler: string;
    domain: string;
    stepId: string;
    flowId: string;
    stepData: Record<string, any>;
    protected _preview?: HassEntity;
    protected _error?: string;
    private _unsub?;
    disconnectedCallback(): void;
    willUpdate(changedProps: any): void;
    protected render(): TemplateResult | typeof nothing;
    private _setPreview;
    private _debouncedSubscribePreview;
    private _subscribePreview;
}
declare global {
    interface HTMLElementTagNameMap {
        "flow-preview-generic": FlowPreviewGeneric;
    }
}
