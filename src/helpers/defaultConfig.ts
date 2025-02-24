import type { FloorCardConfig } from "types";

export const defaultConfig: FloorCardConfig = {
  show_floor_icons: true,
  floor_gap: 8,
  floor_icons_position: "left",
  show_area_icons: true,
  default_area_icon: "mdi:texture-box",
  off_color: "grey",
  area_icons_position: "left",
  entity_icon_placement: "right",
  domain_sort_order: [
    "light",
    "switch",
    "binary_sensor",
    "sensor",
    "climate",
  ],
  class_sort_order: ["door", "window", "tamper", "occupancy"],
  // include: {
  //   light: { states: ["on"] },
  //   input_boolean: { states: ["on"] },
  //   binary_sensor: { states: ["on"], classes: ["door", "window", "occupancy", "tamper"] },
  // },
  include_all: false,
  include_hidden: false,
  preferred_icons: {},
};