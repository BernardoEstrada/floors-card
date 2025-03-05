import { MdMenu } from "@material/web/menu/menu";
import type { CloseMenuEvent } from "@material/web/menu/menu";
export declare class HaMenu extends MdMenu {
    connectedCallback(): void;
    private _handleCloseMenu;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-menu": HaMenu;
    }
    interface HTMLElementEventMap {
        "close-menu": CloseMenuEvent;
    }
}
