import "@material/mwc-button";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-area-picker";
import type { DataEntryFlowStepCreateEntry } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowCreateEntry extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepCreateEntry;
    private _devices;
    private _deviceEntities;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _flowDone;
    private _areaPicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-create-entry": StepFlowCreateEntry;
    }
}
export {};
