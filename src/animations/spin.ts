import { css } from "lit";
import { AnimationBase, AnimationExport } from ".";

const steps = [2, 4, 6, 8, 10];

const baseAnimation: AnimationBase = {
  keyframes: css`
    @keyframes spin {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
    @keyframes spin-x {
      0% {
        transform: rotateX(0deg);
      }
      100% {
        transform: rotateX(360deg);
      }
    }
    @keyframes spin-y {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  `,
  animation: 'spin 2s linear infinite',
};

const animations: Record<string, string> = {
  spin: baseAnimation.animation,
  'spin-reverse': 'spin 2s linear infinite reverse',
  'spin-x': 'spin-x 2s linear infinite',
  'spin-x-reverse': 'spin-x 2s linear infinite reverse',
  'spin-y': 'spin-y 2s linear infinite',
  'spin-y-reverse': 'spin-y 2s linear infinite reverse',
};

steps.forEach((step) => {
  animations[`spin-step-${step}`] = `spin steps(${step}) 2s infinite`;
  animations[`spin-step-reverse-${step}`] = `spin steps(${step}) 2s infinite reverse`;
});

export const spin: AnimationExport = { keyframes: baseAnimation.keyframes, animations } as const;
