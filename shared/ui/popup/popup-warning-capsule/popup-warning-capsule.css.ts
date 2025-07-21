import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  width: "32.4rem",
  height: "23.85rem",
});

export const iconWrapper = style({
  marginBottom: "1.8rem",
});

export const continueButton = style({
  color: themeVars.color.purple[10],
});
