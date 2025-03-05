import type { FloorsCardConfig } from "types";

export const stubConfig: Partial<FloorsCardConfig> = {
  heading: "Home Overview",
  show_floor_icons: "always",
  show_area_icons: "always",
  include_states: ["on"],
  area_gap: 30,
  include: {
    light: {},
    input_boolean: {},
    binary_sensor: {
      classes: ['door', 'window', 'occupancy', 'tamper']
    },
  }
};