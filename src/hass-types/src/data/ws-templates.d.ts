import type { Connection, UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export interface RenderTemplateResult {
    result: string;
    listeners: TemplateListeners;
}
export interface RenderTemplateError {
    error: string;
    level: "ERROR" | "WARNING";
}
export interface TemplateListeners {
    all: boolean;
    domains: string[];
    entities: string[];
    time: boolean;
}
export type TemplatePreview = TemplatePreviewState | TemplatePreviewError;
interface TemplatePreviewState {
    state: string;
    attributes: Record<string, any>;
    listeners: TemplateListeners;
}
interface TemplatePreviewError {
    error: string;
}
export declare const subscribeRenderTemplate: (conn: Connection, onChange: (result: RenderTemplateResult | RenderTemplateError) => void, params: {
    template: string;
    entity_ids?: string | string[];
    variables?: Record<string, unknown>;
    timeout?: number;
    strict?: boolean;
    report_errors?: boolean;
}) => Promise<UnsubscribeFunc>;
export declare const subscribePreviewTemplate: (hass: HomeAssistant, flow_id: string, flow_type: "config_flow" | "options_flow", user_input: Record<string, any>, callback: (preview: TemplatePreview) => void) => Promise<UnsubscribeFunc>;
export {};
