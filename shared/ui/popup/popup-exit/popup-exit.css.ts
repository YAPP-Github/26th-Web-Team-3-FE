import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  width: "32.4rem",
  height: "18.15rem",
});

export const title = style({
  ...themeVars.text.F20,
  marginBottom: "1.2rem",
});

export const backButton = style({
  width: "100%",
  color: themeVars.color.white[30],
});

export const continueButton = style({
  width: "100%",
  color: themeVars.color.purple[10],
});
