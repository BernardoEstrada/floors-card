import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/data-table/ha-data-table";
import type { DataTableRowData } from "../../../../components/data-table/ha-data-table";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-relative-time";
import type { HomeAssistant } from "../../../../types";
export declare class HuiEntityPickerTable extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    noLabelFloat?: boolean;
    entities: DataTableRowData[];
    protected render(): TemplateResult;
    private _columns;
    private _handleSelectionChanged;
    private _handleEntityClicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-picker-table": HuiEntityPickerTable;
    }
}
