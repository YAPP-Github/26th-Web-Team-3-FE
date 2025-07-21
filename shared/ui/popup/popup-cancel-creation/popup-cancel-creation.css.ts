import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  width: "32.4rem",
  height: "18.15rem",
});

export const title = style({
  ...themeVars.text.F20,
  marginTop: "1rem",
  marginBottom: "1.2rem",
});

export const continueButton = style({
  color: themeVars.color.purple[10],
});
