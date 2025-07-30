import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const caption = style({
  ...themeVars.text.B2,
  color: themeVars.color.white[50],
  textAlign: "center",
  padding: "1.4rem",
});
