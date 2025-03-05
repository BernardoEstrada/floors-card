import "@material/mwc-button";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-relative-time";
import "../../../components/ha-service-control";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/entity/state-info";
import type { HomeAssistant } from "../../../types";
import type { ScriptEntity } from "../../../data/script";
import "../components/ha-more-info-state-header";
import type { ExtEntityRegistryEntry } from "../../../data/entity_registry";
declare class MoreInfoScript extends LitElement {
    hass: HomeAssistant;
    stateObj?: ScriptEntity;
    entry?: ExtEntityRegistryEntry;
    private _scriptData;
    private narrow;
    private _unsubMediaQuery?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _cancelScript;
    private _runScript;
    private _callService;
    private _scriptDataChanged;
    private _canRun;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-script": MoreInfoScript;
    }
}
export {};
