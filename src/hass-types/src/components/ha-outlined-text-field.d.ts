import { MdOutlinedTextField } from "@material/web/textfield/outlined-text-field";
import "./ha-outlined-field";
export declare class HaOutlinedTextField extends MdOutlinedTextField {
    protected readonly fieldTag: import("lit-html/static").StaticValue;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-text-field": HaOutlinedTextField;
    }
}
