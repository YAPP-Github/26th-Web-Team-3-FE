import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
  to: {
    opacity: 1,
  },
});

export const sprinkleContainer = style({
  opacity: 0,
  animation: `${fadeIn} 0.1s ease-in forwards`,
});

export const sprinkleDot = style({
  width: 3,
  height: 3,
  backgroundColor: "#CFD1D5",
  borderRadius: "50%",
  position: "absolute",
});
