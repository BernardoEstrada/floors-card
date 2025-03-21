import { FIXED_DOMAIN_STATES } from "ha";

export type Domain = keyof typeof FIXED_DOMAIN_STATES;
export type DomainIncludes = {
  [K in Domain]?: {
    states?: (typeof FIXED_DOMAIN_STATES)[K][number][],
    classes?: string[]
  };
};