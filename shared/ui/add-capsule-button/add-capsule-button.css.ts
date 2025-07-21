import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  padding: "1rem 1.9rem",
  height: "5rem",
  borderRadius: "16px",
  ...themeVars.text.B1,
  backgroundColor: themeVars.color.purple[50],
});
