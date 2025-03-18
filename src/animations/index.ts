import { css, CSSResult } from "lit";
import { spin } from "./spin";
import { bounce } from "./bounce";
import { fade } from "./fade";
import { pulse } from "./pulse";
import { shake } from "./shake";
import { blink } from "./blink";

export const availableBaseAnimations = [
  'spin',
  'bounce',
  'fade',
  'pulse',
  'shake',
  'blink'
] as const;

export type AnimationBase = {
  keyframes: CSSResult;
  animation: string;
}
export type AnimationExport = {
  keyframes: CSSResult;
  animations: Record<string, string>;
}

export const animationKeyframes = [
  spin.keyframes,
  bounce.keyframes,
  fade.keyframes,
  pulse.keyframes,
  shake.keyframes,
  blink.keyframes
]

export const animations: Record<string, string> = Object.assign(
  {},
  spin.animations,
  bounce.animations,
  fade.animations,
  pulse.animations,
  shake.animations,
  blink.animations
);