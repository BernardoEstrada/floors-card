import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { Supervisor } from "../../src/data/supervisor/supervisor";
import "../../src/layouts/hass-error-screen";
import type { Redirects } from "../../src/panels/my/ha-panel-my";
import type { HomeAssistant, Route } from "../../src/types";
export declare const REDIRECTS: Redirects;
declare class HassioMyRedirect extends LitElement {
    hass: HomeAssistant;
    supervisor: Supervisor;
    route: Route;
    _error?: TemplateResult | string;
    connectedCallback(): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _createRedirectUrl;
    private _createRedirectParams;
    private _checkParamType;
}
declare global {
    interface HTMLElementTagNameMap {
        "hassio-my-redirect": HassioMyRedirect;
    }
}
export {};
