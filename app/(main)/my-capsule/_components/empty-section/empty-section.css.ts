import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  paddingTop: "10.2rem",
});

export const caption = style({
  paddingTop: "0.8rem",
  paddingBottom: "2rem",
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
});
