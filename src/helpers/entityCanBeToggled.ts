import { ActionConfig, hasAction } from "ha";
import { EntityActions } from "types";

export const TOGGLEABLE_DOMAINS = [
  "switch",
  "light",
  "climate",
  "fan",
  "input_boolean",
];

export const entityCanBeToggled =
  (entity: string) => TOGGLEABLE_DOMAINS.includes(entity.split(".")[0]);

const actionIsValid = (entity_id: string, action: ActionConfig): boolean =>
  action.action === "toggle" ? entityCanBeToggled(entity_id) : true;

export type ValidatedActionConfig = ActionConfig & { isValid: boolean };

export interface ValidatedEntityActions extends EntityActions {
  entity: string;
  tap_action?: ValidatedActionConfig;
  hold_action?: ValidatedActionConfig;
  double_tap_action?: ValidatedActionConfig;
}

export const getValidatedActions = (entityId: string, actions: EntityActions): ValidatedEntityActions => {
  const tap_action = actions.tap_action && { ...actions.tap_action, isValid: actionIsValid(entityId, actions.tap_action) };
  const hold_action = actions.hold_action && { ...actions.hold_action, isValid: actionIsValid(entityId, actions.hold_action) };
  const double_tap_action = actions.double_tap_action && { ...actions.double_tap_action, isValid: actionIsValid(entityId, actions.double_tap_action) };

  return { ...actions, entity: entityId, tap_action, hold_action, double_tap_action };
}
