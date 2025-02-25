import type { LovelaceCardConfig } from "#hass-types";
import type { Domain, DomainIncludes } from "./Domain";

export interface FloorCardConfig {
  entities_container_card?: LovelaceCardConfig & { cards_param: string };
  entity_card?: LovelaceCardConfig;
  header?: string;
  off_color: string;
  show_floor_icons: boolean | 'always';
  floor_icons_position: 'left' | 'right';
  floor_gap: number;
  area_gap: number;
  show_area_icons: boolean | 'always';
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
}