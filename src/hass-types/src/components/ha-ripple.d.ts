import { MdRipple } from "@material/web/ripple/ripple";
export declare class HaRipple extends MdRipple {
    private readonly attachableTouchController;
    attach(control: HTMLElement): void;
    detach(): void;
    private _handleTouchEnd;
    private _onTouchControlChange;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-ripple": HaRipple;
    }
}
