import { FloorRegistryEntry } from "hass-types";

export const availableFloorIconTemplates = [
  'home',
  'box',
  'boxOutline',
  'circle',
  'circleOutline',
  'literal',
  'roman',
  'dice',
  'diceOutline',
  'tally',
  'circleSlice',
  'hexagonSlice',
] as const;

export type FloorIconTemplate = typeof availableFloorIconTemplates[number];

interface FloorIconTemplateI {
  [key: string]: {
    numeric: string;
    alpha?: string;
    numeric_limit: number;
    has_negative?: boolean;
    alpha_available?: string[];
    default?: string;
  }
}

export const homeFloorIconTemplates: FloorIconTemplateI = {
  home: {
    numeric: 'mdi:home-floor-[[floor]]',
    alpha: 'mdi:home-floor-[[floor]]',
    numeric_limit: 3,
    has_negative: true,
    alpha_available: ['a', 'b', 'g', 'l'],
    // alpha_available: ['a', 'g', 'l'],
    default: 'mdi:home',
  }
} as const;

export const alphaNumericFloorIconTemplates: FloorIconTemplateI = {
  box: {
    numeric: 'mdi:numeric-[[floor]]-box',
    alpha: 'mdi:alpha-[[floor]]-box',
    numeric_limit: 10,
  },
  boxOutline: {
    numeric: 'mdi:numeric-[[floor]]-box-outline',
    alpha: 'mdi:alpha-[[floor]]-box-outline',
    numeric_limit: 10,
  },
  circle: {
    numeric: 'mdi:numeric-[[floor]]-circle',
    alpha: 'mdi:alpha-[[floor]]-circle',
    numeric_limit: 10,
  },
  circleOutline: {
    numeric: 'mdi:numeric-[[floor]]-circle-outline',
    alpha: 'mdi:alpha-[[floor]]-circle-outline',
    numeric_limit: 10,
  },
  literal: {
    numeric: 'mdi:numeric-[[floor]]',
    alpha: 'mdi:alpha-[[floor]]',
    numeric_limit: 10,
    has_negative: true,
  },
} as const;

export const numericFloorIconTemplates: FloorIconTemplateI = {
  roman: {
    numeric: 'mdi:roman-numeral-[[floor]]',
    numeric_limit: 10,
  },
  dice: {
    numeric: 'mdi:dice-[[floor]]',
    numeric_limit: 6,
  },
  diceOutline: {
    numeric: 'mdi:dice-[[floor]]-outline',
    numeric_limit: 6,
  },
  tally: {
    numeric: 'mdi:tally-mark-[[floor]]',
    numeric_limit: 5,
  },
  circleSlice: {
    numeric: 'mdi:circle-slice-[[floor]]',
    numeric_limit: 8,
  },
  hexagonSlice: {
    numeric: 'mdi:hexagon-slice-[[floor]]',
    numeric_limit: 6,
  },
} as const;

export const floorIconTemplates: FloorIconTemplateI = {
  ...homeFloorIconTemplates,
  ...alphaNumericFloorIconTemplates,
  ...numericFloorIconTemplates,
} as const;


export const getFloorIconFromTemplate = (template: FloorIconTemplate, floor: FloorRegistryEntry, preferAlpha?: boolean): string => {
  const possibleFloorNames = tryParseFloorId(floor, preferAlpha);

  const templateData = floorIconTemplates[template];
  if (!templateData) return '';

  while (possibleFloorNames.length) {
    const floorName = possibleFloorNames.shift();
    if (floorName === undefined) continue;

    if (
      templateData.alpha
      && typeof floorName === 'string'
      && (templateData.alpha_available?.includes(floorName.toLowerCase()) || !templateData.alpha_available)
    ) {
      return templateData.alpha.replace('[[floor]]', floorName);
    }
    // if (templateData.has_negative && typeof floorName === 'number' && floorName === -1) {
    if (typeof floorName === 'number' && floorName <= templateData.numeric_limit) {
      if (floorName === -1) {
        if (templateData.has_negative) return templateData.numeric.replace('[[floor]]', 'negative-1');
        continue;
      }
      return templateData.numeric.replace('[[floor]]', floorName.toString());
    }
  }
  return templateData.default || '';
}
  


export const tryParseFloorId = (floor: FloorRegistryEntry, preferAlpha: boolean | undefined = false): (string | number)[] => {
  let floorId: string | undefined = floor.floor_id.replace(/floor|level/gi, '').replace(/[^a-zA-Z0-9]/g, '');
  let floorName: string | undefined = floor.name.replace(/floor|level/gi, '').replace(/[^a-zA-Z0-9]/g, '');
  const floorLevel = floor.level;

  const floorIdDigits = floorId.match(/\d{1,2}/g)?.[0];
  const floorNameDigits = floorName.match(/\d{1,2}/g)?.[0];

  if (!isNaN(parseInt(floorName))) floorName = undefined;
  if (!isNaN(parseInt(floorId))) floorId = undefined;

  let res: (string|number)[] = [];
  if (preferAlpha) {
    if (floorName) res.push(floorName[0].toLowerCase());
    if (floorId) res.push(floorId[0].toLowerCase());
    if (floorNameDigits) res.push(parseInt(floorNameDigits));
    if (floorIdDigits) res.push(parseInt(floorIdDigits));
    if (floorLevel) res.push(floorLevel);
  }
  else {
    if (floorNameDigits) res.push(parseInt(floorNameDigits));
    if (floorIdDigits) res.push(parseInt(floorIdDigits));
    if (floorLevel) res.push(floorLevel);
    if (floorName) res.push(floorName[0].toLowerCase());
    if (floorId) res.push(floorId[0].toLowerCase());
  }

  return res;
}
