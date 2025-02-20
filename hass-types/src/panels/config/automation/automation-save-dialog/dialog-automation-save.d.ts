import "@material/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-domain-icon";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-textarea";
import "../../../../components/ha-textfield";
import "../../../../components/ha-labels-picker";
import "../../category/ha-category-picker";
import "../../../../components/ha-expansion-panel";
import "../../../../components/chips/ha-chip-set";
import "../../../../components/chips/ha-assist-chip";
import "../../../../components/ha-area-picker";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { SaveDialogParams } from "./show-dialog-automation-save";
declare class DialogAutomationSave extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _error?;
    private _visibleOptionals;
    private _entryUpdates;
    private _params;
    private _newName?;
    private _newIcon?;
    private _newDescription?;
    showDialog(params: SaveDialogParams): void;
    closeDialog(): boolean;
    protected _renderOptionalChip(id: string, label: string): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _renderDiscard(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected _renderInputs(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _addOptional;
    private _registryEntryChanged;
    private _iconChanged;
    private _valueChanged;
    private _handleDiscard;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-automation-save": DialogAutomationSave;
    }
}
export {};
