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