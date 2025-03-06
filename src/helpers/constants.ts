export const cardName = 'floors-card';

export const exampleDomains = [
  "binary_sensor",
  "cover",
  "device_tracker",
  "fan",
  "humidifier",
  "input_boolean",
  "light",
  "lock",
  "switch",
] as const;

export const exampleClasses = [
  "door",
  "window",
  "occupancy",
  "tamper",
  "motion",
  "no_class",
] as const;

export const exampleStates = [
  "on",
  "off",
  "open",
  "closed",
  "locked",
  "unlocked",
] as const;

export const defaultIcons = {
  light: 'mdi:lightbulb',
  binary_sensor: {
    door: 'mdi:door',
    window: 'mdi:window-closed',
    occupancy: 'mdi:account',
    tamper: 'mdi:alert',
    motion: 'mdi:walk',
    no_class: 'mdi:checkbox-blank-circle',
  },
  fallback: 'mdi:help-circle-outline',
} as const;

export const defaultColors = {
  light: 'orange',
  binary_sensor: {
    door: 'blue',
    window: 'blue',
    occupancy: 'green',
    tamper: 'red',
    motion: 'green',
    no_class: 'grey',
  },
  fallback: 'grey',
} as const;