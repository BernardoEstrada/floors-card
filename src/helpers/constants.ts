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
  light: {
    on: 'mdi:lightbulb',
    off: 'mdi:lightbulb-off',
  },
  fan: {
    on: 'mdi:fan',
    off: 'mdi:fan-off',
  },
  switch: {
    outlet: 'mdi:power-socket-us',
    no_class: {
      on: 'mdi:toggle-switch-variant',
      off: 'mdi:toggle-switch-variant-off',
    },
  },
  binary_sensor: {
    door: 'mdi:door-open',
    window: 'mdi:window-open',
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
  switch: 'green',
  fan: 'lime',
  fallback: 'grey',
} as const;