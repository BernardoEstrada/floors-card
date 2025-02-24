import { FIXED_DOMAIN_STATES } from "#hass-types";

type Domain = keyof typeof FIXED_DOMAIN_STATES;
type DomainIncludes = {
  [K in Domain]?: {
    states?: (typeof FIXED_DOMAIN_STATES)[K][number][],
    classes?: string[]
  };
};