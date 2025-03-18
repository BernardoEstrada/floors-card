import { AnimationBase, AnimationExport } from '.';
import { css } from 'lit';

const baseAnimation: AnimationBase = {
  keyframes: css`
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
  `,
  animation: 'blink 1s infinite',
};

export const blink: AnimationExport = { keyframes: baseAnimation.keyframes, animations: { blink: baseAnimation.animation } } as const;

