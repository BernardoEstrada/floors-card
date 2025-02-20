import { MdSubMenu } from "@material/web/menu/sub-menu";
export declare class HaSubMenu extends MdSubMenu {
    show(): Promise<void>;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sub-menu": HaSubMenu;
    }
}
