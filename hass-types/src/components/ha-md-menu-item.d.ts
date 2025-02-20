import { MdMenuItem } from "@material/web/menu/menu-item";
export declare class HaMdMenuItem extends MdMenuItem {
    clickAction?: (item?: HTMLElement) => void;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-menu-item": HaMdMenuItem;
    }
}
