import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
  backgroundColor: themeVars.color.gradient.header_bg,
});

export const backButton = style({
  width: "4.4rem",
  height: "4.4rem",
  color: themeVars.color.white[40],
});

export const rightElement = style({
  display: "flex",
  color: themeVars.color.white[40],
});
