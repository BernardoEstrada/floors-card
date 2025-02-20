import { MdSlider } from "@material/web/slider/slider";
export declare class HaSlider extends MdSlider {
    connectedCallback(): void;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-slider": HaSlider;
    }
}
