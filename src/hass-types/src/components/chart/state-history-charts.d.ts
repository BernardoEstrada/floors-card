import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { HistoryResult } from "../../data/history";
import type { HomeAssistant } from "../../types";
import "./state-history-chart-line";
import "./state-history-chart-timeline";
declare global {
    interface HASSDomEvents {
        "y-width-changed": {
            value: number;
            chartIndex: number;
        };
    }
}
export declare class StateHistoryCharts extends LitElement {
    hass: HomeAssistant;
    historyData?: HistoryResult;
    narrow: boolean;
    names?: Record<string, string>;
    virtualize: boolean;
    endTime?: Date;
    startTime?: Date;
    upToNow: boolean;
    hoursToShow?: number;
    showNames: boolean;
    clickForMoreInfo: boolean;
    isLoadingData: boolean;
    logarithmicScale: boolean;
    minYAxis?: number;
    maxYAxis?: number;
    fitYData: boolean;
    height?: string;
    private _computedStartTime;
    private _computedEndTime;
    private _maxYWidth;
    private _childYWidths;
    private _chartCount;
    private _savedScrollPos?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHistoryItem;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _yWidthChanged;
    private _isHistoryEmpty;
    private _saveScrollPos;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-charts": StateHistoryCharts;
    }
}
