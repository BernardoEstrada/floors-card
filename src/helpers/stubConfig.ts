import type { FloorsCardConfig } from "types";

export const stubConfig: Partial<FloorsCardConfig> = {
  heading: "Home Overview",
  show_floor_icons: "override",
  fallback_floor_icon_template: "home",
  floor_icons_prefer_alpha: true,
  floor_icons_position: "left",
  floor_gap: 8,
  show_area_icons: "if_available",
  area_icons_position: "left",
  area_gap: 8,
  entity_icon_placement: "right",
  include_states: ["on"],
  include_domains: ["light", "input_boolean", "binary_sensor"],
  include_classes: ["door", "window", "occupancy", "tamper", "no_class"],
};