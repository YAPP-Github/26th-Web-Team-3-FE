import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const iconWrapper = style({
  marginBottom: "1.8rem",
});

export const content = style({
  color: themeVars.color.white[30],
});

export const continueButton = style({
  color: themeVars.color.semantic.red,
});
