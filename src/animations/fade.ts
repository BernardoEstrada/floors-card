import { AnimationBase, AnimationExport } from '.';
import { css } from 'lit';

const baseAnimation: AnimationBase = {
  keyframes: css`
    @keyframes fade {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.1;
      }
      100% {
        opacity: 1;
      }
    }
  `,
  animation: 'fade 2s linear infinite',
};


export const fade: AnimationExport = { keyframes: baseAnimation.keyframes, animations: { fade: baseAnimation.animation } } as const;