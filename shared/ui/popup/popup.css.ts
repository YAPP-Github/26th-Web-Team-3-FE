import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: themeVars.color.black["90_bg"],
  borderRadius: "20px",
  padding: "3.2rem 1.2rem 1.2rem 1.2rem",
});

export const title = style({
  ...themeVars.text.F17,
  color: themeVars.color.white[85],
  marginBottom: "0.8rem",
});

export const content = style({
  ...themeVars.text.F14,
  color: themeVars.color.white[40],
  marginBottom: "2.8rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const actions = style({
  display: "flex",
  ...themeVars.text.F17,
  justifyContent: "center",
  gap: "1rem",
  height: "4.8rem",
  width: "100%",
});
