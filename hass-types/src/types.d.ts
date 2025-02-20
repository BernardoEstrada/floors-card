import type { DurationFormatConstructor } from "@formatjs/intl-durationformat/src/types";
import type { Auth, Connection, HassConfig, HassEntities, HassEntity, HassServices, HassServiceTarget, MessageBase } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "./common/translations/localize";
import type { AreaRegistryEntry } from "./data/area_registry";
import type { DeviceRegistryEntry } from "./data/device_registry";
import type { EntityRegistryDisplayEntry } from "./data/entity_registry";
import type { FloorRegistryEntry } from "./data/floor_registry";
import type { CoreFrontendUserData } from "./data/frontend";
import type { FrontendLocaleData, getHassTranslations } from "./data/translation";
import type { Themes } from "./data/ws-themes";
import type { ExternalMessaging } from "./external_app/external_messaging";
declare global {
    var __DEV__: boolean;
    var __DEMO__: boolean;
    var __BUILD__: "modern" | "legacy";
    var __VERSION__: string;
    var __STATIC_PATH__: string;
    var __BACKWARDS_COMPAT__: boolean;
    var __SUPERVISOR__: boolean;
    var __HASS_URL__: string;
    interface Window {
        customPanelJS: string;
        ShadyCSS: {
            nativeCss: boolean;
            nativeShadow: boolean;
            prepareTemplate(templateElement: any, elementName: any, elementExtension: any): any;
            styleElement(element: any): any;
            styleSubtree(element: any, overrideProperties: any): any;
            styleDocument(overrideProperties: any): any;
            getComputedStyleValue(element: any, propertyName: any): any;
        };
    }
    interface HASSDomEvents {
        "value-changed": {
            value: unknown;
        };
        change: undefined;
        "hass-logout": undefined;
        "config-refresh": undefined;
        "hass-api-called": {
            success: boolean;
            response: unknown;
        };
    }
    interface ImportMeta {
        url: string;
    }
    namespace Intl {
        const DurationFormat: DurationFormatConstructor;
    }
}
export interface ValueChangedEvent<T> extends CustomEvent {
    detail: {
        value: T;
    };
}
export type Constructor<T = any> = new (...args: any[]) => T;
export interface ClassElement {
    kind: "field" | "method";
    key: PropertyKey;
    placement: "static" | "prototype" | "own";
    initializer?: (...args: any[]) => unknown;
    extras?: ClassElement[];
    finisher?: <T>(cls: Constructor<T>) => undefined | Constructor<T>;
    descriptor?: PropertyDescriptor;
}
export interface Credential {
    auth_provider_type: string;
    auth_provider_id: string;
}
export interface MFAModule {
    id: string;
    name: string;
    enabled: boolean;
}
export interface CurrentUser {
    id: string;
    is_owner: boolean;
    is_admin: boolean;
    name: string;
    credentials: Credential[];
    mfa_modules: MFAModule[];
}
export interface ThemeSettings {
    theme: string;
    dark?: boolean;
    primaryColor?: string;
    accentColor?: string;
}
export interface PanelInfo<T = Record<string, any> | null> {
    component_name: string;
    config: T;
    icon: string | null;
    title: string | null;
    url_path: string;
    config_panel_domain?: string;
}
export type Panels = Record<string, PanelInfo>;
export interface CalendarViewChanged {
    end: Date;
    start: Date;
    view: string;
}
export type FullCalendarView = "dayGridMonth" | "dayGridWeek" | "dayGridDay" | "listWeek";
export type ThemeMode = "auto" | "light" | "dark";
export interface ToggleButton {
    label: string;
    iconPath?: string;
    value: string;
}
export interface Translation {
    nativeName: string;
    isRTL: boolean;
    hash: string;
}
export interface TranslationMetadata {
    fragments: string[];
    translations: Record<string, Translation>;
}
export type TranslationDict = typeof import("./translations/en.json");
export interface IconMetaFile {
    version: string;
    parts: IconMeta[];
}
export interface IconMeta {
    start: string;
    file: string;
}
export interface Notification {
    notification_id: string;
    message: string;
    title: string;
    status: "read" | "unread";
    created_at: string;
}
export type Resources = Record<string, Record<string, string>>;
export interface Context {
    id: string;
    parent_id?: string;
    user_id?: string | null;
}
export interface ServiceCallResponse {
    context: Context;
    response?: any;
}
export interface ServiceCallRequest {
    domain: string;
    service: string;
    serviceData?: Record<string, any>;
    target?: HassServiceTarget;
}
export interface HomeAssistant {
    auth: Auth & {
        external?: ExternalMessaging;
    };
    connection: Connection;
    connected: boolean;
    states: HassEntities;
    entities: Record<string, EntityRegistryDisplayEntry>;
    devices: Record<string, DeviceRegistryEntry>;
    areas: Record<string, AreaRegistryEntry>;
    floors: Record<string, FloorRegistryEntry>;
    services: HassServices;
    config: HassConfig;
    themes: Themes;
    selectedTheme: ThemeSettings | null;
    panels: Panels;
    panelUrl: string;
    language: string;
    selectedLanguage: string | null;
    locale: FrontendLocaleData;
    resources: Resources;
    localize: LocalizeFunc;
    translationMetadata: TranslationMetadata;
    suspendWhenHidden: boolean;
    enableShortcuts: boolean;
    vibrate: boolean;
    debugConnection: boolean;
    dockedSidebar: "docked" | "always_hidden" | "auto";
    defaultPanel: string;
    moreInfoEntityId: string | null;
    user?: CurrentUser;
    userData?: CoreFrontendUserData | null;
    hassUrl(path?: any): string;
    callService(domain: ServiceCallRequest["domain"], service: ServiceCallRequest["service"], serviceData?: ServiceCallRequest["serviceData"], target?: ServiceCallRequest["target"], notifyOnError?: boolean, returnResponse?: boolean): Promise<ServiceCallResponse>;
    callApi<T>(method: "GET" | "POST" | "PUT" | "DELETE", path: string, parameters?: Record<string, any>, headers?: Record<string, string>): Promise<T>;
    callApiRaw(// introduced in 2024.11
    method: "GET" | "POST" | "PUT" | "DELETE", path: string, parameters?: Record<string, any>, headers?: Record<string, string>, signal?: AbortSignal): Promise<Response>;
    fetchWithAuth(path: string, init?: Record<string, any>): Promise<Response>;
    sendWS(msg: MessageBase): void;
    callWS<T>(msg: MessageBase): Promise<T>;
    loadBackendTranslation(category: Parameters<typeof getHassTranslations>[2], integrations?: Parameters<typeof getHassTranslations>[3], configFlow?: Parameters<typeof getHassTranslations>[4]): Promise<LocalizeFunc>;
    loadFragmentTranslation(fragment: string): Promise<LocalizeFunc | undefined>;
    formatEntityState(stateObj: HassEntity, state?: string): string;
    formatEntityAttributeValue(stateObj: HassEntity, attribute: string, value?: any): string;
    formatEntityAttributeName(stateObj: HassEntity, attribute: string): string;
}
export interface Route {
    prefix: string;
    path: string;
}
export interface PanelElement extends HTMLElement {
    hass?: HomeAssistant;
    narrow?: boolean;
    route?: Route | null;
    panel?: PanelInfo;
}
export interface LocalizeMixin {
    hass?: HomeAssistant;
    localize: LocalizeFunc;
}
export type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer U> ? U : T extends (...args: any) => infer U ? U : never;
export type Entries<T> = [keyof T, T[keyof T]][];
