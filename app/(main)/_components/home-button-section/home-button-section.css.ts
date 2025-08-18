import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { keyframes, style } from "@vanilla-extract/css";

const rotateMirrorAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "50%": {
    transform: "rotate(360deg)",
  },
  "100%": {
    transform: "rotate(0deg)",
  },
});

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  paddingTop: "3.2rem",
  zIndex: themeVars.zIndex.home.content,
  ...screen.md({
    flexDirection: "row",
    justifyContent: "center",
  }),
});

export const button = style({
  ...themeVars.text.B1,
  cursor: "pointer",
  padding: "0.8rem 2.4rem",
  borderRadius: "13px",
  height: "5rem",
  backgroundColor: themeVars.color.black[80],
  width: "16rem",
  whiteSpace: "nowrap",
  zIndex: themeVars.zIndex.home.content,
});

export const exploreButton = style({
  background: themeVars.color.gradient.purple,
  ...themeVars.text.B1,
  cursor: "pointer",
  padding: "0.8rem 1.6rem",
  whiteSpace: "nowrap",
  borderRadius: "13px",
  position: "relative",
  width: "16rem",
});

export const lineInteract = style({
  position: "absolute",
  top: "-160%",
  left: "-10%",
  zIndex: themeVars.zIndex.button.lineInteract,
  width: "21.9rem",
  height: "21.9rem",
  borderRadius: "99px",
  opacity: 1,
  background: themeVars.color.gradient.conic,
  animation: `${rotateMirrorAnimation} 5s cubic-bezier(0.44, 0, 0.56, 1) infinite`,
});

export const lineInteractContainer = style({
  position: "absolute",
  overflow: "hidden",
  top: "-1px",
  left: "-1px",
  width: "calc(100% + 2px)",
  height: "calc(100% + 2px)",
  borderRadius: "13px",
  transform: "translateZ(0)",
  willChange: "transform",
  zIndex: themeVars.zIndex.button.lineInteract,
});
