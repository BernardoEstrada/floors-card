import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import "../../cards/hui-card";
import type { DeleteCardDialogParams } from "./show-delete-card-dialog";
export declare class HuiDialogDeleteCard extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _cardConfig?;
    showDialog(params: DeleteCardDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _delete;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-delete-card": HuiDialogDeleteCard;
    }
}
