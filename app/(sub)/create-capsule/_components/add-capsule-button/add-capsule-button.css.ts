import { themeVars } from "@/shared/styles/base/theme.css";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
    padding: "1.7rem",
    height: "5rem",
    borderRadius: "16px",
    ...themeVars.text.B1,
    background: themeVars.color.gradient.purple,
    color: themeVars.color.white[100],
    position: "fixed",
    right: "3rem",
    bottom: "4rem",
    transition: "width 0.3s, padding 0.3s, gap 0.3s",
    overflow: "hidden",
    whiteSpace: "nowrap",
    margin: "0.1rem",
  },
  variants: {
    isIntersecting: {
      true: {
        width: "10.4rem",
        gap: "0.8rem",
      },
      false: {
        width: "5rem",
        gap: "0",
      },
    },
  },
});

export const refDiv = style({
  height: 1,
});

const rotateMirrorAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const lineInteract = recipe({
  base: {
    position: "absolute",
    zIndex: -1,
    borderRadius: "99px",
    opacity: 1,
    background: themeVars.color.gradient.conic,
    animation: `${rotateMirrorAnimation} 4s cubic-bezier(0.44, 0, 0.56, 1) infinite`,
  },
  variants: {
    isIntersecting: {
      true: {
        width: "131px",
        height: "131px",
        top: "-4rem",
        right: "-1rem",
      },
      false: {
        width: "85px",
        height: "85px",
        top: "-2rem",
        right: "-1.5rem",
      },
    },
  },
});
export const buttonContainer = recipe({
  base: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    right: "3rem",
    bottom: "4rem",
    padding: "0.1rem",
    borderRadius: "16px",
    zIndex: themeVars.zIndex.addCapsuleButton.content,
    clipPath: "inset(0 0 0 0 round 16px)",
  },
  variants: {
    isIntersecting: {
      true: {
        width: "10.6rem",
        height: "5.2rem",
      },
      false: {
        width: "5.2rem",
        height: "5.2rem",
      },
    },
  },
});
