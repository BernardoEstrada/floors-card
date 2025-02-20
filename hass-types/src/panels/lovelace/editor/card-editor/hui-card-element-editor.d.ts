import "@material/mwc-tab-bar/mwc-tab-bar";
import "@material/mwc-tab/mwc-tab";
import type { TemplateResult } from "lit";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceCardEditor, LovelaceConfigForm } from "../../types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
import "./hui-card-layout-editor";
import "./hui-card-visibility-editor";
import type { LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
export declare class HuiCardElementEditor extends HuiTypedElementEditor<LovelaceCardConfig> {
    showVisibilityTab: boolean;
    sectionConfig?: LovelaceSectionConfig;
    private _currTab;
    protected getConfigElement(): Promise<LovelaceCardEditor | undefined>;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
    private _configChanged;
    get _showLayoutTab(): boolean;
    protected renderConfigElement(): TemplateResult;
    private _handleTabChanged;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-element-editor": HuiCardElementEditor;
    }
}
