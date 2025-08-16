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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  paddingTop: "3.2rem",
  ...screen.md({
    flexDirection: "row",
    justifyContent: "center",
  }),
});

export const button = style({
  ...themeVars.text.B1,
  cursor: "pointer",
  padding: "0.9rem 2.5rem",
  borderRadius: "13px",
  height: "5rem",
  backgroundColor: themeVars.color.black[70],
});

export const exploreButton = style({
  background: themeVars.color.gradient.purple,
  ...themeVars.text.B1,
  cursor: "pointer",
  padding: "0.9rem 2.5rem",
  borderRadius: "13px",
  position: "relative",
});

export const lineInteract = style({
  position: "absolute",
  top: "-160%",
  left: "-10%",
  zIndex: -1,
  width: "219px",
  height: "219px",
  borderRadius: "99px",
  opacity: 1,
  background:
    "conic-gradient(from 0deg at 50% 50%, rgb(255, 255, 255) 3.6deg, rgba(255, 255, 255, 0) 50.4deg, rgba(234, 234, 234, 0) 126deg, rgba(253, 253, 253, 0.89) 178.378deg, rgba(210, 210, 210, 0) 234deg, rgba(184, 184, 184, 0) 309.6deg, rgb(255, 255, 255) 360deg)",
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
});
