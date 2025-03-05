import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
export interface Node {
    id: string;
    value: number;
    index: number;
    label?: string;
    tooltip?: string;
    color?: string;
    passThrough?: boolean;
}
export interface Link {
    source: string;
    target: string;
    value?: number;
}
export interface SankeyChartData {
    nodes: Node[];
    links: Link[];
}
export declare class HaSankeyChart extends LitElement {
    hass: HomeAssistant;
    data: SankeyChartData;
    vertical: boolean;
    loadingText?: string;
    private _statePerPixel;
    private _sizeController;
    disconnectedCallback(): void;
    willUpdate(): void;
    render(): string | typeof nothing | import("lit-html").TemplateResult<1>;
    private _processNodesAndPaths;
    private _processLinks;
    private _processNodes;
    private _processPaths;
    private _setNodeSizes;
    private _getSectionFlexSize;
    private _getVerticalLabelFontSize;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sankey-chart": HaSankeyChart;
    }
}
