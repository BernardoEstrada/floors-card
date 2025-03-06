import type { LovelaceCardConfig } from "#hass-types";
import { FloorIconTemplate } from "helpers";
import type { Domain, DomainIncludes } from "./Domain";

export interface FloorsCardConfig implements LovelaceCardConfig {
  entities_container_card?: LovelaceCardConfig & { cards_param: string };
  entity_card?: LovelaceCardConfig;
  heading?: string;
  off_color: string;
  show_floor_icons: false | 'if_available' | 'always' | 'override';
  fallback_floor_icon_template: FloorIconTemplate;
  floor_icons_prefer_alpha?: boolean;
  floor_icons_position: 'left' | 'right';
  floor_gap: number;
  area_gap: number;
  show_area_icons: false | 'if_available' | 'always' | 'override';
  default_area_icon: string;
  area_icons_position: 'left' | 'right';
  entity_icon_placement: 'left' | 'right';
  domain_sort_order: string[];
  class_sort_order: string[];
  include_domains?: Domain[];
  include_classes?: string[];
  include_states?: string[];
  include?: DomainIncludes;
  include_all: boolean;
  include_hidden: boolean;
  preferred_icons: Record<string, string>;
  preferred_colors: Record<string, string>;
}