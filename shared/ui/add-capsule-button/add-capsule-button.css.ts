import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  padding: "1rem 1.9rem",
  height: "5rem",
  borderRadius: "16px",
  ...themeVars.text.B1,
  backgroundColor: themeVars.color.purple[50],
  position: "fixed",
  right: "3rem",
  bottom: "4rem",
  transition: "width 0.3s, padding 0.3s, gap 0.3s",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const expanded = style({
  width: "12rem",
  padding: "1rem 1.9rem",
  gap: "0.8rem",
});

export const collapsed = style({
  width: "5rem",
  padding: "1rem",
  gap: 0,
});

export const refDiv = style({
  height: 1,
});
