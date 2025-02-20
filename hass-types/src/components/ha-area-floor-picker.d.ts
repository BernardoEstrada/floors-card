import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-combo-box";
import type { HaComboBox } from "./ha-combo-box";
import "./ha-floor-icon";
import "./ha-icon-button";
import "./ha-list-item";
import "./ha-svg-icon";
import "./ha-tree-indicator";
export declare class HaAreaFloorPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    /**
     * Show only areas with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no areas with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only areas with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of areas to be excluded.
     * @type {Array}
     * @attr exclude-areas
     */
    excludeAreas?: string[];
    /**
     * List of floors to be excluded.
     * @type {Array}
     * @attr exclude-floors
     */
    excludeFloors?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    disabled: boolean;
    required: boolean;
    private _opened?;
    comboBox: HaComboBox;
    private _init;
    open(): Promise<void>;
    focus(): Promise<void>;
    private _rowRenderer;
    private _getAreas;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _filterChanged;
    private get _value();
    private _openedChanged;
    private _areaChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-area-floor-picker": HaAreaFloorPicker;
    }
}
