import type { FloorsCardConfig } from "types";

export const fallbackConfig: FloorsCardConfig = {
  show_floor_icons: 'if_available',
  fallback_floor_icon_template: "home",
  floor_gap: 8,
  area_gap: 8,
  floor_icons_position: "left",
  show_area_icons: 'if_available',
  default_area_icon: "mdi:texture-box",
  off_color: "grey",
  entity_actions: {
    tap_action: { action: "more-info" },
    fallback_to_next_action: true,
  },
  area_icons_position: "left",
  entity_icon_placement: "right",
  domain_sort: [
    "light",
    "switch",
    "binary_sensor",
    "sensor",
    "climate",
  ],
  class_sort: ["door", "window", "tamper", "occupancy"],
  // include: {
  //   light: { states: ["on"] },
  //   input_boolean: { states: ["on"] },
  //   binary_sensor: { states: ["on"], classes: ["door", "window", "occupancy", "tamper"] },
  // },
  include_all: false,
  include_hidden: false,
  preferred_icons: {},
  preferred_colors: {},
};