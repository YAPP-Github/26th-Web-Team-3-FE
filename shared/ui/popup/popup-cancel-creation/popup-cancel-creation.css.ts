import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const title = style({
  ...themeVars.text.F20,
  marginTop: "1rem",
  marginBottom: "0.6rem",
});

export const continueButton = style({
  color: themeVars.color.purple[10],
});

export const content = style({
  ...themeVars.text.F16,
});
