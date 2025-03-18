import { computeDomain } from "ha";
import { HassEntity } from "home-assistant-js-websocket";

// create an overload for the function getPreferredValue
// that takes a config object and a hassEntity object

export function getPreferredValue<T>(config: Record<string, T>, hassEntity: HassEntity, returnAllOptions?: true): T[];
export function getPreferredValue<T>(config: Record<string, T>, hassEntity: HassEntity, returnAllOptions?: false): T;
export function getPreferredValue<T>(config: Record<string, T>, hassEntity: HassEntity, returnAllOptions: boolean): T | T[]
export function getPreferredValue<T>(config: Record<string, T>, hassEntity: HassEntity, returnAllOptions: boolean = false) {
  const preferredValuesEntries = Object.entries(config);
  const entity = {
    id: hassEntity.entity_id, 
    state: hassEntity.state,
    class: hassEntity.attributes.device_class || 'no_class',
    domain: computeDomain(hassEntity.entity_id),
  }

  const preferredValuesFor = {
    specificSubstringState: preferredValuesEntries.find(([key]) => [entity.class, entity.domain].includes(key.split('.')[0]) && entity.id.includes(key.split('.')[1]) && entity.state === key.split('.')[2])?.[1],
    substringState: preferredValuesEntries.find(([key]) => entity.id.includes(key.split('.')[1]) && entity.state === key.split('.')[2])?.[1],
    classState: config[`${entity.class}.${entity.state}`],
    domainState: config[`${entity.domain}.${entity.state}`],
    entity: config[entity.id],
    substring: Object.entries(config).find(([key]) => entity.id.includes(key))?.[1],
    class: config[entity.class],
    domain: config[entity.domain],
  }

  if (returnAllOptions) {
    return Object.values(preferredValuesFor).filter(value => value).flat() as T[];
  }

  return Object.values(preferredValuesFor).find(value => value) as T;
}
