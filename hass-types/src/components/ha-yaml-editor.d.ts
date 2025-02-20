import type { Schema } from "js-yaml";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-code-editor";
import type { HaCodeEditor } from "./ha-code-editor";
import "./ha-button";
export declare class HaYamlEditor extends LitElement {
    hass: HomeAssistant;
    value?: any;
    yamlSchema: Schema;
    defaultValue?: any;
    isValid: boolean;
    label?: string;
    autoUpdate: boolean;
    readOnly: boolean;
    required: boolean;
    copyClipboard: boolean;
    hasExtraActions: boolean;
    private _yaml;
    _codeEditor?: HaCodeEditor;
    setValue(value: any): void;
    protected firstUpdated(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onChange;
    get yaml(): string;
    private _copyYaml;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-yaml-editor": HaYamlEditor;
    }
}
