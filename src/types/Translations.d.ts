import type {
  FloorsCardConfig,
  ShowIconOptions,
  IconPositionOptions,
  FloorSortMethod,
  AreaSortMethod,
  SortOrder,
} from './FloorsCardConfig';

export type OmitFromSchema = 'entity_actions';

type TranslationSchema<T> = {
  [K in keyof Required<T>]: T[K] extends object ? TranslationSchema<T[K]> : string;
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
  icon_templates: { [K in FloorIconTemplate as K]: string },
  icon_position: { [K in IconPositionOptions as K]: string },
  sorting: { [K in FloorSortMethod | AreaSortMethod | SortOrder as K]: string },
  entity_actions: { fallback_to_next_action: string },
  groups: { [K in EditorGroups as K]: string },
  keep_entity_after_toggle_for_suffix: string,
  enable_multiple_animations: string,
  key_value_labels: { [key: string]: string }
};

type FloorsCardConfigTranslations = Omit<FloorsCardConfig, 'entity_actions' | 'floor_sort_method' | 'area_sort_method' | 'domain_sort' | 'class_sort' | 'preferred_icons' | 'preferred_colors' | 'animate'>;

export type FloorsCardTranslations = {
  editor: TranslationSchema<FloorsCardConfigTranslations & FloorCardValueTranslations>;
  card: object;
}