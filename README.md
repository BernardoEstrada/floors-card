[![hacs][hacs-badge]][hacs-url]

# Floors Card for HomeAssistant

This card is a custom card for [Home Assistant][home-assistant] that displays a list of floors and areas in a card.

## Installation

### HACS

1. Add this repository to [HACS][hacs]
2. Search for "Floors Card" in the HACS store
3. Click install
4. Reload the browser

### Manual

1. Download the `floors-card.js` file from the latest release
2. Place the file in the `www/my-components` directory of your HomeAssistant configuration
3. Add the following to your `ui-lovelace.yaml` configuration:

```yaml
resources:
  - url: /local/my-components/floors-card.js
    type: module
```

4. Reload the browser

## Configuration

The card can be configured using the Lovelace UI or by editing the `floors-card.js` file.

### Parameters

| Name                      | Type                                         | Default                                                   | Description                                                                                        |
|---------------------------|----------------------------------------------|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `header`                  | string                                       | None                                                      | The header to display above the card.                                                              |
| `off_color`               | Color                                        | "grey"                                                    | The color to use for entities that are off.                                                        |
| `show_floor_icons`        | boolean                                      | true                                                      | Whether to show floor icons.                                                                       |
| `floor_icons_position`    | 'left' or 'right'                            | "left"                                                    | The position of the floor icons.                                                                   |
| `floor_gap`               | number                                       | 8                                                         | The gap between floors in px.                                                                      |
| `show_area_icons`         | boolean                                      | true                                                      | Whether to show area icons.                                                                        |
| `area_icons_position`     | 'left' or 'right'                            | "left"                                                    | The position of the area icons.                                                                    |
| `area_gap`                | number                                       | 8                                                         | The gap between areas in px.
| `default_area_icon`       | string                                       | "mdi:texture-box"                                       | The default icon to use for areas.                                                                 |
| `entity_icon_placement`   | 'left' or 'right'                            | "right"                                                   | The position of the entity icons.                                                                  |
| `domain_sort_order`       | Domain[]                                     | ["light", "switch", "binary_sensor", "sensor", "climate"] | The order to sort domains by.                                                                      |
| `class_sort_order`        | Class[]                                      | ["door", "window", "tamper", "occupancy"]                 | The order to sort classes by.                                                                      |
| `include_domains`         | Domain[]                                     | None                                                      | The domains to include.                                                                            |
| `include_classes`         | Class[]                                      | None                                                      | The classes to include.                                                                            |
| `include_states`          | State[]                                      | None                                                      | The states to include.                                                                             |
| `include`                 | DomainIncludes                               | None                                                      | The domains to include. This will override the `include_domains` and `include_classes` parameters. |
| `include_all`             | boolean                                      | false                                                     | Whether to include all domains and classes.                                                        |
| `include_hidden`          | boolean                                      | false                                                     | Whether to include hidden entities.                                                                |
| `preferred_icons`         | Record<Domain \| Class, Icon>                | {}                                                        | The preferred icons to use for entities with the same domain or class.                             |
| `entities_container_card` | LovelaceCardConfig & { cards_param: string } | None                                                      | The card to use for the entities container.                                                        |
| `entity_card`             | LovelaceCardConfig                           | None                                                      | The card to use for each entity.                                                                   |

#### Notes

##### Color

The `off_color` parameter can be set to any valid color name or hex.
If written as a hex value, it should be in the format `#RRGGBB`, remember to include "" since # is a special character in YAML.

##### Domain

`domain_sort_order`, `include_domains` and keys in `include` and `preferred_icons` can be set to any domain valid in HomeAssistant.
Examples include `light`, `switch`, `binary_sensor`, `input_boolean`.

##### Class

`class_sort_order`, `include_classes` and keys in `include` and `preferred_icons` can be set to any class valid in HomeAssistant.
An special class called `no_class` can be used to include entities with no class, like lights.
Examples include `door`, `window`, `tamper`, `occupancy`.

##### State

`include_states` can be set to any state valid in HomeAssistant.
Examples include `on`, `open`, `playing`, `buffering`.

##### Icon

`preferred_icons` values can be set to any icon valid in HomeAssistant.
Examples include `mdi:door`, `mdi:window`, `mdi:alarm-light-outline`.

##### DomainIncludes

The `include` parameter can be used if more granular filters are needed than the `include_domains` and `include_classes` parameters provide. It is an object with the following structure:
```yaml
[K in Domain]?: 
  states?: (typeof FIXED_DOMAIN_STATES)[K][number][],
  classes?: string[]
```
This means that the `include` parameter can be set to an object with the following structure:
```yaml
include:
  light: 
    states: ["on"]
  input_boolean:
    states: ["on"]
  binary_sensor:
    states: ["on"]
    classes:
      - "door"
      - "window"
      - "occupancy"
      - "tamper"
```

### Example Configurations

#### Basic

This configuratided so lights are shown, however, this also shows `binary_sensors` with no class, which may be unwanted behavior (Like the unknown class in the Roof Patio in my example).
```yaml
type: custom:floors-card
include_states: ["on"]
include_domains: ["light", "input_boolean", "binary_sensor"]
include_classes: ["door", "window", "tamper", "occupancy", "no_class"]
```
![Basic configuration screenshot](<img/basic_config.png>)

#### Include Parameter

The `include` parameter can be used if more granular filters are needed than the `include_domains` and `include_classes` parameters provide. 
In this example, all lights and input_booleans are included, and all binary_sensors with the `door`, `window`, `occupancy`, or `tamper` class are included.
```yaml
type: custom:floors-card
include_states: ["on"]
include:
  light: {}
  input_boolean: {}
  binary_sensor:
    classes:
      - "door"
      - "window"
      - "occupancy"
      - "tamper"
```
![Include parameter screenshot](<img/include_param_config.png>)

#### Custom Entity Card

The `entity_card` parameter can be used to manually specify the card to use for each entity.
This may look like the same as the include parameter card but it is using a [Mushroom Template Card](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/template.md) instead of the default card.
```yaml
type: custom:floors-card-dev
entity_card:
  type: custom:mushroom-template-card
  tap_action:
    action: more-info
  card_mod:
    style:
      mushroom-card mushroom-state-item$: |
        .container { padding: 0 !important; padding-bottom: 4px !important; }
include_states: ["on"]
include:
  light: {}
  input_boolean: {}
  binary_sensor:
    classes:
      - "door"
      - "window"
      - "occupancy"
      - "tamper"
```
![Custom entity card screenshot](<img/custom_entity_card_config.png>)

#### Custom Entities Container Card

The `entities_container_card` parameter can be used to manually specify the card to use for the entities container.
In this example, the entities container is a [Mushroom Chips Card](https://github.com/piitaya/lovelace-mushroom/blob/main/docs/cards/chips.md), which receives a list of templated chips in the `chips` parameter.
```yaml
type: custom:floors-card-dev
entities_container_card:
  type: custom:mushroom-chips-card
  cards_param: chips
entity_card:
  type: template
  tap_action:
    action: more-info
  card_mod:
    style:
      mushroom-card mushroom-state-item$: |
        .container { padding: 0 !important; padding-bottom: 4px !important; }
include_states: ["on"]
include:
  light: {}
  input_boolean: {}
  binary_sensor:
    classes:
      - "door"
      - "window"
      - "occupancy"
      - "tamper"
```
![Custom entities container card screenshot](<img/custom_entities_container_card_config.png>)

## Development

This card is written in TypeScript and compiled to JavaScript using Parcel.

To run the development version of the card, run the following command:

```bash
yarn watch
```

This will start a development server and watch for changes in the source files.

In development mode, the card name is `floors-card-dev` instead of `floors-card` to avoid conflicts.

Note: sometimes `yarn watch` may not work correctly, in which case you may need to run `yarn build` every time you make a change.

<!-- Badges -->
[hacs-url]: https://github.com/hacs/integration
[hacs-badge]: https://img.shields.io/badge/hacs-default-orange.svg?style=flat-square

<!-- References -->
[home-assistant]: https://www.home-assistant.io/
[hacs]: https://hacs.xyz
