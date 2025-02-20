import type { EditorView } from "@codemirror/view";
import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
declare global {
    interface HASSDomEvents {
        "editor-save": undefined;
    }
}
export declare class HaCodeEditor extends ReactiveElement {
    codemirror?: EditorView;
    mode: string;
    hass?: HomeAssistant;
    autofocus: boolean;
    readOnly: boolean;
    linewrap: boolean;
    autocompleteEntities: boolean;
    autocompleteIcons: boolean;
    error: boolean;
    private _value;
    private _loadedCodeMirror?;
    private _iconList?;
    set value(value: string);
    get value(): string;
    get hasComments(): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected scheduleUpdate(): Promise<void>;
    protected update(changedProps: PropertyValues): void;
    private get _mode();
    private _createCodeMirror;
    private _getStates;
    private _entityCompletions;
    private _getIconItems;
    private _mdiCompletions;
    private _onUpdate;
    private _getFoldingExtensions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-code-editor": HaCodeEditor;
    }
}
