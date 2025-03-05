import "@material/mwc-list/mwc-list-item";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../condition/ha-automation-condition";
import "../action/ha-automation-action";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
import type { Option } from "../../../../data/script";
import type { HomeAssistant } from "../../../../types";
export default class HaAutomationOptionRow extends LitElement {
    hass: HomeAssistant;
    option: Option;
    narrow: boolean;
    disabled: boolean;
    index: number;
    first: boolean;
    last: boolean;
    private _expanded;
    _entityReg: EntityRegistryEntry[];
    private _expandedChanged;
    private _getDescription;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _removeOption;
    private _renameOption;
    private _conditionChanged;
    private _actionChanged;
    expand(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-option-row": HaAutomationOptionRow;
    }
}
