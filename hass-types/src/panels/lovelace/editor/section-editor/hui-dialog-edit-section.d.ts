import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-list-item";
import "../../../../components/ha-yaml-editor";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "./hui-section-settings-editor";
import "./hui-section-visibility-editor";
import type { EditSectionDialogParams } from "./show-edit-section-dialog";
import "@material/mwc-tab-bar/mwc-tab-bar";
import "@material/mwc-tab/mwc-tab";
export declare class HuiDialogEditSection extends LitElement implements HassDialog<EditSectionDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _config?;
    private _viewConfig?;
    private _yamlMode;
    private _currTab;
    private _editor?;
    protected updated(changedProperties: PropertyValues): void;
    showDialog(params: EditSectionDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): typeof nothing | TemplateResult<1>;
    private _configChanged;
    private _handleTabChanged;
    private _handleAction;
    private _viewYamlChanged;
    private _ignoreKeydown;
    private _cancel;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-section": HuiDialogEditSection;
    }
}
