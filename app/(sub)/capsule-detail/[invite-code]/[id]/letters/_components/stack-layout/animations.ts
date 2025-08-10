import type { VisibleLetter } from "./index";

const getRotateAngle = (stackIndex: number) => {
  return stackIndex * -5;
};

export const createStackAnimations = (direction: number, visibleLetters: VisibleLetter[]) => {
  return visibleLetters.map(({ stackIndex }) => ({
    initial:
      direction === -1 && stackIndex === 0
        ? {
            x: 100,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 0,
            zIndex: 10,
          }
        : {
            x: 0,
            y: 0,
            scale: 1,
            rotate: getRotateAngle(stackIndex),
            opacity: 1,
            zIndex: 10 - stackIndex,
          },
    animate: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: getRotateAngle(stackIndex),
      zIndex: 10 - stackIndex,
      opacity: 1,
    },
    exit:
      direction === 1 && stackIndex === 0
        ? {
            x: 100,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 0,
            zIndex: 15,
          }
        : {
            x: 0,
            y: 0,
            scale: 1,
            rotate: getRotateAngle(stackIndex),
            opacity: 1,
            zIndex: 10 - stackIndex,
          },
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  }));
};
