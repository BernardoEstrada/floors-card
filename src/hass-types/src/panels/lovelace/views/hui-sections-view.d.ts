import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-ripple";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiBadge } from "../badges/hui-badge";
import "../badges/hui-view-badges";
import type { HuiCard } from "../cards/hui-card";
import "../components/hui-badge-edit-mode";
import type { HuiSection } from "../sections/hui-section";
import type { Lovelace } from "../types";
export declare const DEFAULT_MAX_COLUMNS = 4;
export declare class SectionsView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    isStrategy: boolean;
    sections: HuiSection[];
    badges: HuiBadge[];
    cards: HuiCard[];
    private _config?;
    private _sectionColumnCount;
    _dragging: boolean;
    private _columnsController;
    setConfig(config: LovelaceViewConfig): void;
    private _sectionConfigKeys;
    private _getSectionKey;
    private _computeSectionsCount;
    private _sectionVisibilityChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<typeof this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _defaultSection;
    private _handleCardAdded;
    private _importedCardSectionConfig;
    private _createSection;
    private _editSection;
    private _deleteSection;
    private _sectionMoved;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sections-view": SectionsView;
    }
}
