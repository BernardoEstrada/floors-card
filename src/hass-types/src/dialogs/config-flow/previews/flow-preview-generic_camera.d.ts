import { nothing } from "lit";
import { FlowPreviewGeneric } from "./flow-preview-generic";
import "../../../components/ha-hls-player";
import "../../../components/ha-circular-progress";
declare class FlowPreviewGenericCamera extends FlowPreviewGeneric {
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _videoLoaded;
}
declare global {
    interface HTMLElementTagNameMap {
        "flow-preview-generic_camera": FlowPreviewGenericCamera;
    }
}
export {};
