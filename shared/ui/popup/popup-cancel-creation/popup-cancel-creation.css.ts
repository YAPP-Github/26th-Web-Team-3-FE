import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const title = style({
  ...themeVars.text.F20,
  marginTop: "1rem",
});

export const continueButton = style({
  color: themeVars.color.purple[10],
});
