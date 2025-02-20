import "@material/mwc-button/mwc-button";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-card";
import "../../components/ha-settings-row";
import "../../components/ha-icon-button";
import type { RefreshToken } from "../../data/refresh_token";
import type { HomeAssistant } from "../../types";
declare class HaLongLivedTokens extends LitElement {
    hass: HomeAssistant;
    refreshTokens?: RefreshToken[];
    private _accessTokens;
    protected render(): TemplateResult;
    private _createToken;
    private _deleteToken;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-long-lived-access-tokens-card": HaLongLivedTokens;
    }
}
export {};
