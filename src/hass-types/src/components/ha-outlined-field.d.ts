import { MdOutlinedField } from "@material/web/field/outlined-field";
export declare class HaOutlinedField extends MdOutlinedField {
    protected readonly fieldTag: import("lit-html/static").StaticValue;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-outlined-field": HaOutlinedField;
    }
}
