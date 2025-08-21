import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/base/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  margin: "0 auto",
  maxWidth: "90rem",
  padding: "0 1.6rem",
});

export const textHighlight = style({
  color: themeVars.color.semantic.red,
});
