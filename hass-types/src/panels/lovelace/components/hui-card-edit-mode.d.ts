import "@material/mwc-button";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardPath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class HuiCardEditMode extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    path: LovelaceCardPath;
    hiddenOverlay: boolean;
    noEdit: boolean;
    noDuplicate: boolean;
    _menuOpened: boolean;
    _hover: boolean;
    _focused: boolean;
    protected _clipboard?: LovelaceCardConfig;
    private get _cards();
    private _touchStarted;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _documentClicked;
    protected render(): TemplateResult;
    private _handleOpened;
    private _handleClosed;
    private _handleOverlayClick;
    private _handleAction;
    private _duplicateCard;
    private _editCard;
    private _cutCard;
    private _copyCard;
    private _deleteCard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-edit-mode": HuiCardEditMode;
    }
}
