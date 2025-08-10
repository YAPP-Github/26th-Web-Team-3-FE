import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";
export const closeButton = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
  padding: "0.7rem 1.4rem",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "6.4rem",
});

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  maxWidth: "45rem",
});
