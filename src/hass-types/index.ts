export type { HomeAssistant } from "./src/types";

export type { LovelaceCard } from "./src/panels/lovelace/types";
export type { LovelaceCardConfig } from "./src/data/lovelace/config/card";
export type { FloorRegistryEntry } from "./src/data/floor_registry";
export type { AreaRegistryEntry } from "./src/data/area_registry";


import { CustomCardsWindow } from "./src/data/lovelace_custom_cards";
export type CustomCardHelpers =
  typeof import("./src/panels/lovelace/custom-card-helpers");

declare global {
  interface Window extends CustomCardsWindow {
    loadCardHelpers(): Promise<CustomCardHelpers>;
  }
}