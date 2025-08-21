import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
  background: themeVars.color.gradient.header_bg,
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "80rem",
});

export const iconButton = style({
  width: "4.4rem",
  height: "4.4rem",
  marginRight: "1rem",
  color: themeVars.color.white[40],
});

export const rightElement = style({
  display: "flex",
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
});
