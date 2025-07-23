import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.2rem",
  ...themeVars.text.B1,
  color: themeVars.color.white[85],

  padding: "1.7rem 2.4rem",
});
