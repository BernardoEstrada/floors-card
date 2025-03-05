import { MdFilterChip } from "@material/web/chips/filter-chip";
export declare class HaFilterChip extends MdFilterChip {
    noLeadingIcon: boolean;
    static styles: import("lit").CSSResultOrNative[];
    protected renderLeadingIcon(): import("lit-html").TemplateResult<1 | 2>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-chip": HaFilterChip;
    }
}
