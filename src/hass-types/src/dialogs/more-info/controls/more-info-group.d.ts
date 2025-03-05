import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { GroupEntity } from "../../../data/group";
import "../../../state-summary/state-card-content";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoGroup extends LitElement {
    hass: HomeAssistant;
    stateObj?: GroupEntity;
    private _groupDomainStateObj?;
    private _moreInfoType?;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-group": MoreInfoGroup;
    }
}
export {};
