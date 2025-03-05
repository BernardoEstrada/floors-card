import "@material/mwc-button/mwc-button";
import "../../../components/ha-markdown";
import type { BlueprintScriptConfig } from "../../../data/script";
import { HaBlueprintGenericEditor } from "../blueprint/blueprint-generic-editor";
export declare class HaBlueprintScriptEditor extends HaBlueprintGenericEditor {
    config: BlueprintScriptConfig;
    protected get _config(): BlueprintScriptConfig;
    protected render(): import("lit-html").TemplateResult<1>;
    protected _getBlueprints(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        "blueprint-script-editor": HaBlueprintScriptEditor;
    }
}
