import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  padding: "1.2rem 1.2rem 1.2rem 2.4rem",
  margin: "0 1.7rem",
  position: "fixed",
  bottom: "7rem",
  borderRadius: "16px",
  width: "calc(80rem - 3.4rem)",
  background: themeVars.color.gradient.darkgray_op,
});

export const buttonContainer = style({
  display: "flex",
  gap: "1rem",
  width: "50%",
});

export const captionContainer = style({
  ...themeVars.text.B2,
  color: themeVars.color.white[50],
  display: "flex",
  gap: "1rem",
  width: "50%",
  alignItems: "center",
});

export const chipContainer = style({
  display: "flex",
  gap: "0.4rem",
});
