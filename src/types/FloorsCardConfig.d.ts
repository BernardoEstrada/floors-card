import type { LovelaceCardConfig, ActionConfig } from "ha";
import { FloorIconTemplate } from "helpers";
import type { Domain, DomainIncludes } from "./Domain";

export interface EntityActions {
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  fallback_to_next_action?: boolean;
}

export type ShowIconOptions = false | 'if_available' | 'always' | 'override';
export type IconPositionOptions = 'left' | 'right';
export type FloorSortMethod = 'level' | 'name' | 'id';
export type AreaSortMethod = 'name' | 'entities';
export type SortOrder = 'asc' | 'desc';

export interface FloorsCardConfig implements LovelaceCardConfig {
  heading?: string;
  show_floor_icons: ShowIconOptions;
  fallback_floor_icon_template: FloorIconTemplate;
  floor_icons_prefer_alpha?: boolean;
  floor_icons_position: IconPositionOptions;
  floor_gap: number;
  show_area_icons: ShowIconOptions;
  default_area_icon: string;
  area_icons_position: IconPositionOptions;
  area_gap: number;
  entity_icon_placement: IconPositionOptions;
  off_color: string;
  entity_actions: EntityActions;
  floor_sort_method?: FloorSortMethod[];
  floor_sort_order?: SortOrder;
  area_sort_method?: AreaSortMethod[];
  area_sort_order?: SortOrder;
  domain_sort: string[];
  class_sort: string[];
  include_domains?: Domain[];
  include_classes?: string[];
  include_states?: string[];
  include_all: boolean;
  include_hidden: boolean;
  include?: DomainIncludes;
  preferred_icons: Record<string, string>;
  preferred_colors: Record<string, string>;
  entities_container_card?: LovelaceCardConfig & { cards_param: string };
  entity_card?: LovelaceCardConfig;
}