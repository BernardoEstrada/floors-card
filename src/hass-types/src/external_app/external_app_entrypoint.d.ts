import type { HomeAssistantMain } from "../layouts/home-assistant-main";
import type { EMIncomingMessageBarCodeScanAborted, EMIncomingMessageBarCodeScanResult, ImprovDiscoveredDevice } from "./external_messaging";
export declare const attachExternalToApp: (hassMainEl: HomeAssistantMain) => void;
export declare const addExternalBarCodeListener: (listener: (msg: EMIncomingMessageBarCodeScanResult | EMIncomingMessageBarCodeScanAborted) => boolean) => () => void;
declare global {
    interface HASSDomEvents {
        "improv-discovered-device": ImprovDiscoveredDevice;
        "improv-device-setup-done": undefined;
    }
}
