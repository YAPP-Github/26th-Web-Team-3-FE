import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const title = style({
  ...themeVars.text.H1,
  color: themeVars.color.white[100],
});

export const description = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
});

export const captionContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "3.8rem",
  paddingBottom: "6.4rem",
});
