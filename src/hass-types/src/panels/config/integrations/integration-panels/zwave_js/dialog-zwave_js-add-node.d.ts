import "@material/mwc-button/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-circular-progress";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-qr-scanner";
import "../../../../../components/ha-radio";
import "../../../../../components/ha-switch";
import "../../../../../components/ha-textfield";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSAddNodeDialogParams } from "./show-dialog-zwave_js-add-node";
export interface ZWaveJSAddNodeDevice {
    id: string;
    name: string;
}
declare class DialogZWaveJSAddNode extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _entryId?;
    private _status?;
    private _device?;
    private _stages?;
    private _inclusionStrategy?;
    private _dsk?;
    private _error?;
    private _requestedGrant?;
    private _securityClasses;
    private _lowSecurity;
    private _lowSecurityReason?;
    private _supportsSmartStart?;
    private _addNodeTimeoutHandle?;
    private _subscribed?;
    private _qrProcessing;
    connectedCallback(): void;
    disconnectedCallback(): void;
    showDialog(params: ZWaveJSAddNodeDialogParams): Promise<void>;
    private _pinInput?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _shouldPreventClose;
    private _chooseInclusionStrategy;
    private _handleStrategyChange;
    private _handleSecurityClassChange;
    private _scanQRCode;
    private _qrCodeScanned;
    private _qrCodeError;
    private _handleQrCodeScanned;
    private _handlePinKeyUp;
    private _validateDskAndEnterPin;
    private _grantSecurityClasses;
    private _startManualInclusion;
    private _checkSmartStartSupport;
    private _startOver;
    private _startInclusion;
    private _onBeforeUnload;
    private _unsubscribe;
    closeDialog(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-add-node": DialogZWaveJSAddNode;
    }
}
export {};
