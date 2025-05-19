import { AnimationBase, AnimationExport } from '.';
import { css } from 'lit';


const baseAnimation: AnimationBase = {
  keyframes: css`
    @keyframes bounce {
      0%, 20%, 100% { transform: translateY(0); }
      2.5% { transform: translateY(-6px) rotate(-14deg); }
      5% { transform: translateY(-6px) rotate(11deg); }
      7.5% { transform: translateY(-6px) rotate(-8deg); }
      10% { transform: translateY(-6px) rotate(5deg); }
      12.5% { transform: translateY(0); }
      15% { transform: translateY(-3px); }
    }
  `,
  animation: 'bounce 3s ease infinite',
};

export const bounce: AnimationExport = { keyframes: baseAnimation.keyframes, animations: { bounce: baseAnimation.animation } } as const;