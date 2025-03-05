import type { HomeAssistant } from "../types";
interface SystemCheckValueDateObject {
    type: "date";
    value: string;
}
interface SystemCheckValueErrorObject {
    type: "failed";
    error: string;
    more_info?: string;
}
interface SystemCheckValuePendingObject {
    type: "pending";
}
export type SystemCheckValueObject = SystemCheckValueDateObject | SystemCheckValueErrorObject | SystemCheckValuePendingObject;
export type SystemCheckValue = string | number | boolean | SystemCheckValueObject;
export type SystemHealthInfo = Record<string, {
    manage_url?: string;
    info: Record<string, SystemCheckValue>;
}>;
export declare const subscribeSystemHealthInfo: (hass: HomeAssistant, callback: (info: SystemHealthInfo | undefined) => void) => Promise<() => Promise<void>>;
export {};
