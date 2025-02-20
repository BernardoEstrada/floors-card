import "../elements/hui-conditional-element";
import "../elements/hui-icon-element";
import "../elements/hui-image-element";
import "../elements/hui-service-button-element";
import "../elements/hui-state-badge-element";
import "../elements/hui-state-icon-element";
import "../elements/hui-state-label-element";
import type { LovelaceElementConfig } from "../elements/types";
export declare const createPictureElementElement: (config: LovelaceElementConfig) => import("../elements/types").LovelaceElement;
export declare const getPictureElementClass: (type: string) => Promise<import("../types").LovelaceElementConstructor>;
