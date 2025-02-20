import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-climate-state";
import "../../../components/ha-cover-controls";
import "../../../components/ha-cover-tilt-controls";
import "../../../components/ha-date-input";
import "../../../components/ha-humidifier-state";
import "../../../components/ha-select";
import "../../../components/ha-slider";
import "../../../components/ha-time-input";
import "../../../components/entity/ha-entity-toggle";
import "../../../components/entity/state-badge";
import "../../../panels/lovelace/components/hui-timestamp-display";
import type { HomeAssistant } from "../../../types";
declare class EntityPreviewRow extends LitElement {
    hass: HomeAssistant;
    private stateObj?;
    protected render(): typeof nothing | TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _renderEntityState;
}
declare global {
    interface HTMLElementTagNameMap {
        "entity-preview-row": EntityPreviewRow;
    }
}
export {};
