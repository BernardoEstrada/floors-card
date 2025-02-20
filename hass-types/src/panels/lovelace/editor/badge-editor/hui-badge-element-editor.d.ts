import "@material/mwc-tab-bar/mwc-tab-bar";
import "@material/mwc-tab/mwc-tab";
import type { CSSResultGroup, TemplateResult } from "lit";
import type { LovelaceBadgeConfig } from "../../../../data/lovelace/config/badge";
import type { LovelaceCardEditor, LovelaceConfigForm } from "../../types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
import "./hui-badge-visibility-editor";
export declare class HuiBadgeElementEditor extends HuiTypedElementEditor<LovelaceBadgeConfig> {
    private _currTab;
    protected getConfigElement(): Promise<LovelaceCardEditor | undefined>;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
    private _handleTabChanged;
    private _configChanged;
    protected renderConfigElement(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-element-editor": HuiBadgeElementEditor;
    }
}
