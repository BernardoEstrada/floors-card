import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-code-editor";
import "../ha-icon-button";
import "./hat-logbook-note";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceExtended } from "../../data/trace";
import "../../panels/logbook/ha-logbook-renderer";
import type { HomeAssistant } from "../../types";
import type { NodeInfo } from "./hat-script-graph";
export declare class HaTracePathDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    trace: TraceExtended;
    logbookEntries: LogbookEntry[];
    selected: NodeInfo;
    renderedNodes: Record<string, any>;
    trackedNodes: Record<string, any>;
    private _view;
    protected render(): TemplateResult;
    private _renderSelectedTraceInfo;
    private _renderSelectedConfig;
    private _renderChangedVars;
    private _renderLogbook;
    private _showTab;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-path-details": HaTracePathDetails;
    }
}
