import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const settingSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1.2rem",
  backgroundColor: themeVars.color.white[5],
  borderRadius: "12px",
  padding: "1.8rem",
});

export const category = style({
  ...themeVars.text.F12,
  color: themeVars.color.white[40],
});
