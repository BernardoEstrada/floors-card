import { HaLogicalCondition } from "./ha-automation-condition-logical";
import type { LogicalCondition } from "../../../../../data/automation";
export declare class HaOrCondition extends HaLogicalCondition {
    static get defaultConfig(): LogicalCondition;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-or": HaOrCondition;
    }
}
