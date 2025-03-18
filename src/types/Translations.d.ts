import type {
  FloorsCardConfig,
  EntityActions,
  ShowIconOptions,
  IconPositionOptions,
  FloorSortMethod,
  AreaSortMethod,
  SortOrder,
} from './FloorsCardConfig';

export type OmitFromSchema = 'entity_actions';

type TranslationSchema<T, U> = {
  [K in keyof Required<Omit<T, U>>]: string;
};

export type EditorGroups = 
    "floor_config"
  | "area_config"
  | "entities_config"
  | "sorting"
  | "includes"
  | "sorting_floors"
  | "sorting_areas"
  | "sorting_entities"
  | "ignore_areas"
  | "ignore_floors";

type FloorCardValueTranslations = {
  icon_visibility: { [K in ShowIconOptions as `${K}`]: string },
  icon_templates: { [K in FloorIconTemplate]: string },
  icon_position: { [K in IconPositionOptions]: string },
  sorting: { [K in FloorSortMethod | AreaSortMethod | SortOrder]: string },
  entity_actions: { [K in keyof EntityActions]: string } & { fallback_to_next_action: string },
  groups: { [K in EditorGroups]: string },
  keep_entity_after_toggle_for_suffix: string,
  enable_multiple_animations: string,
  key_value_labels: { [key: string]: string }
};

export type FloorsCardTranslations = {
  editor: TranslationSchema<FloorsCardConfig, OmitFromSchema> & FloorCardValueTranslations
  card: {}
}