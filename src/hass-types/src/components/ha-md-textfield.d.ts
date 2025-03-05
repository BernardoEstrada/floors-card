import { MdFilledTextField } from "@material/web/textfield/filled-text-field";
export declare class HaMdTextfield extends MdFilledTextField {
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-textfield": HaMdTextfield;
    }
}
