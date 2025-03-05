import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import "../../sections/hui-section";
import "../../cards/hui-card";
import type { SuggestCardDialogParams } from "./show-suggest-card-dialog";
export declare class HuiDialogSuggestCard extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _cardConfig?;
    private _sectionConfig?;
    private _saving;
    private _yamlEditor?;
    showDialog(params: SuggestCardDialogParams): void;
    closeDialog(): void;
    private get _viewSupportsSection();
    private _renderPreview;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _pickCard;
    private _computeNewConfig;
    private _save;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-suggest-card": HuiDialogSuggestCard;
    }
}
