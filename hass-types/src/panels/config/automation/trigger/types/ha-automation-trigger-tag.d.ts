import "@material/mwc-list/mwc-list-item";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-select";
import type { TagTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaTagTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: TagTrigger;
    disabled: boolean;
    private _tags?;
    static get defaultConfig(): TagTrigger;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchTags;
    private _tagChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-tag": HaTagTrigger;
    }
}
