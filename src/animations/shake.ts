import { AnimationBase, AnimationExport } from '.';
import { css } from 'lit';

const baseAnimation: AnimationBase = {
  keyframes: css`
    @keyframes shake {
      0%, 40%, 60%, 100% {
        transform: translateX(0);
      }
      42%, 46%, 50%, 54%, 58% {
        transform: translateX(3px);
      }
      44%, 48%, 52%, 56% {
        transform: translateX(-2px);
      }
  }`,
  animation: 'shake 3s infinite',
};

export const shake: AnimationExport = { keyframes: baseAnimation.keyframes, animations: { shake: baseAnimation.animation } } as const;