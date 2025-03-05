import { MdCircularProgress } from "@material/web/progress/circular-progress";
import type { PropertyValues } from "lit";
export declare class HaCircularProgress extends MdCircularProgress {
    ariaLabel: string;
    size?: "tiny" | "small" | "medium" | "large";
    protected updated(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResultOrNative[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-circular-progress": HaCircularProgress;
    }
}
