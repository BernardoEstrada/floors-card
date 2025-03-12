import type { FloorRegistryEntry, AreaRegistryEntry } from "ha";

export interface FloorWithAreas extends FloorRegistryEntry {
  areas: AreaRegistryEntry[];
}