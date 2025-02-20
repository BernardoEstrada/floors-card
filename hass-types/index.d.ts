export { HomeAssistant } from "./src/types";

export { LovelaceCard } from "./src/panels/lovelace/types";
export { LovelaceCardConfig } from "./src/data/lovelace/config/card";

import { CustomCardsWindow } from "./src/data/lovelace_custom_cards";
export type CustomCardHelpers =
  typeof import("./src/panels/lovelace/custom-card-helpers");

declare global {
  interface Window extends CustomCardsWindow {
    loadCardHelpers(): Promise<CustomCardHelpers>;
  }
}
