import { AnimationBase, AnimationExport } from '.';
import { css } from 'lit';

const baseAnimation: AnimationBase = {
  keyframes: css`
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
    `,
  animation: 'pulse 2s linear infinite'
}

export const pulse: AnimationExport = { keyframes: baseAnimation.keyframes, animations: { pulse: baseAnimation.animation } } as const;