import type { FloorRegistryEntry, AreaRegistryEntry } from "../hass-types";

export interface FloorWithAreas extends FloorRegistryEntry {
  areas: AreaRegistryEntry[];
}