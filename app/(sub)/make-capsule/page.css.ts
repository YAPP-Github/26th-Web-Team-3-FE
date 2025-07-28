import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const closeButton = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
  padding: "0.7rem 1.4rem",
});
