import { FIXED_DOMAIN_STATES, BINARY_SENSOR_DEVICE_CLASSES, SENSOR_DEVICE_CLASSES } from "ha";
import { HassEntity } from "home-assistant-js-websocket";

type Classes = {
  binary_sensor: typeof BINARY_SENSOR_DEVICE_CLASSES,
  sensor: typeof SENSOR_DEVICE_CLASSES,
}

export type Domain = keyof typeof FIXED_DOMAIN_STATES;
export type Class = Classes[keyof Classes][number] | 'no_class';
export type State = typeof FIXED_DOMAIN_STATES[Domain][number];
export type TypedHassEntity = HassEntity & { state: State };

export type DomainIncludes = {
  [K in Domain]?: {
    states?: (typeof FIXED_DOMAIN_STATES)[K][number][],
    classes?: Classes[K] extends unknown ? Classes[K][number][] : never,
  };
};