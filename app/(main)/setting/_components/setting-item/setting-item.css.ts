import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const item = style({
  ...themeVars.text.F16,
  color: themeVars.color.white[85],
});

export const itemContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const arrowRight = style({
  color: themeVars.color.white[30],
});
