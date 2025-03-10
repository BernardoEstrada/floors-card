import type { IntlMessageFormat } from "intl-messageformat";
import type { HTMLTemplateResult } from "lit";
import type { Resources, TranslationDict } from "../../types";
export type LocalizeKeys = FlattenObjectKeys<Omit<TranslationDict, "supervisor">> | `panel.${string}` | `ui.card.alarm_control_panel.${string}` | `ui.card.weather.attributes.${string}` | `ui.card.weather.cardinal_direction.${string}` | `ui.card.lawn_mower.actions.${string}` | `ui.components.calendar.event.rrule.${string}` | `ui.components.selectors.file.${string}` | `ui.components.logbook.messages.detected_device_classes.${string}` | `ui.components.logbook.messages.cleared_device_classes.${string}` | `ui.dialogs.entity_registry.editor.${string}` | `ui.dialogs.more_info_control.lawn_mower.${string}` | `ui.dialogs.more_info_control.vacuum.${string}` | `ui.dialogs.quick-bar.commands.${string}` | `ui.dialogs.unhealthy.reason.${string}` | `ui.dialogs.unsupported.reason.${string}` | `ui.panel.config.${string}.${"caption" | "description"}` | `ui.panel.config.dashboard.${string}` | `ui.panel.config.zha.${string}` | `ui.panel.config.zwave_js.${string}` | `ui.panel.lovelace.card.${string}` | `ui.panel.lovelace.editor.${string}` | `ui.panel.page-authorize.form.${string}` | `component.${string}`;
export type LandingPageKeys = FlattenObjectKeys<TranslationDict["landing-page"]>;
export type FlattenObjectKeys<T extends Record<string, any>, Key extends keyof T = keyof T> = Key extends string ? T[Key] extends Record<string, unknown> ? `${Key}.${FlattenObjectKeys<T[Key]>}` : `${Key}` : never;
export type LocalizeFunc<Keys extends string = LocalizeKeys> = (key: Keys, values?: Record<string, string | number | HTMLTemplateResult | null | undefined>) => string;
type FormatType = Record<string, any>;
export interface FormatsType {
    number: FormatType;
    date: FormatType;
    time: FormatType;
}
/**
 * Adapted from Polymer app-localize-behavior.
 *
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
 * Optional dictionary of user defined formats, as explained here:
 * http://formatjs.io/guides/message-syntax/#custom-formats
 *
 * For example, a valid dictionary of formats would be:
 * this.formats = {
 *    number: { USD: { style: 'currency', currency: 'USD' } }
 * }
 */
export declare const computeLocalize: <Keys extends string = LocalizeKeys>(cache: HTMLElement & {
    _localizationCache?: Record<string, IntlMessageFormat>;
}, language: string, resources: Resources, formats?: FormatsType) => Promise<LocalizeFunc<Keys>>;
export {};
