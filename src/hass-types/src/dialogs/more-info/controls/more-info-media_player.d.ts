import "@material/mwc-button/mwc-button";
import "@material/mwc-list/mwc-list-item";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-select";
import "../../../components/ha-slider";
import "../../../components/ha-svg-icon";
import type { MediaPlayerEntity } from "../../../data/media-player";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoMediaPlayer extends LitElement {
    hass: HomeAssistant;
    stateObj?: MediaPlayerEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _handleClick;
    private _toggleMute;
    private _selectedValueChanged;
    private _handleSourceChanged;
    private _handleSoundModeChanged;
    private _showBrowseMedia;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-media_player": MoreInfoMediaPlayer;
    }
}
export {};
