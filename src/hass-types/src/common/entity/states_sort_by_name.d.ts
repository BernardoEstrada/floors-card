/**
 * Sort function to help sort states by name
 *
 * Usage:
 *   const states = [state1, state2]
 *   states.sort(statessortStatesByName);
 */
import type { HassEntity } from "home-assistant-js-websocket";
export declare const sortStatesByName: (entityA: HassEntity, entityB: HassEntity) => 1 | 0 | -1;
