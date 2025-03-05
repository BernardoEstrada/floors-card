import "@material/mwc-button/mwc-button";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-button-menu";
import "./ha-list-item";
import "./ha-textfield";
declare class HaQrScanner extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc;
    description?: string;
    alternativeOptionLabel?: string;
    error?: string;
    private _cameras?;
    private _manual;
    private _qrScanner?;
    private _qrNotFoundCount;
    private _removeListener?;
    private _video?;
    private _canvasContainer?;
    private _manualInput?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get _nativeBarcodeScanner();
    private _loadQrScanner;
    private _listCameras;
    private _qrCodeError;
    private _qrCodeScanned;
    private _manualKeyup;
    private _manualPaste;
    private _manualSubmit;
    private _cameraChanged;
    private _openExternalScanner;
    private _closeExternalScanner;
    private _notifyExternalScanner;
    private _reportError;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "qr-code-scanned": {
            value: string;
        };
        "qr-code-error": {
            message: string;
        };
        "qr-code-closed": undefined;
    }
    interface HTMLElementTagNameMap {
        "ha-qr-scanner": HaQrScanner;
    }
}
export {};
