import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.6rem",
  ...themeVars.text.B1,
  color: themeVars.color.white[85],
  borderRadius: "24px",
  padding: "1.7rem 2.4rem",
  backgroundColor: themeVars.color.black[100],
  height: "5.25rem",
});

export const checkIcon = style({
  color: themeVars.color.semantic.green,
});
