import type { LovelaceConfig, LovelaceRawConfig } from "../../../data/lovelace/config/types";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { LovelaceStrategy } from "./types";
export type LovelaceStrategyConfigType = "dashboard" | "view" | "section";
export declare const getLovelaceStrategy: <T extends LovelaceStrategyConfigType>(configType: T, strategyType: string) => Promise<LovelaceStrategy>;
export declare const generateLovelaceDashboardStrategy: (strategyConfig: LovelaceStrategyConfig, hass: HomeAssistant) => Promise<LovelaceConfig>;
export declare const generateLovelaceViewStrategy: (strategyConfig: LovelaceStrategyConfig, hass: HomeAssistant) => Promise<LovelaceViewConfig>;
export declare const generateLovelaceSectionStrategy: (strategyConfig: LovelaceStrategyConfig, hass: HomeAssistant) => Promise<LovelaceViewConfig>;
/**
 * Find all references to strategies and replaces them with the generated output
 */
export declare const expandLovelaceConfigStrategies: (config: LovelaceRawConfig, hass: HomeAssistant) => Promise<LovelaceConfig>;
