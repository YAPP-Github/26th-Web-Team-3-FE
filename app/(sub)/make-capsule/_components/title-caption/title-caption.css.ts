import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const titleCaption = style({
  ...themeVars.text.H2,
  textAlign: "center",
});
