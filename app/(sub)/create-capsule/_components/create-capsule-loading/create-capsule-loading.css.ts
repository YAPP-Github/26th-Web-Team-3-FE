import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const titleCaption = style({
  display: "flex",
  textAlign: "center",
  ...themeVars.text.H2,
  background: themeVars.color.gradient.light_purple,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const lettieImage = style({
  width: "35rem",
  height: "35rem",
  ...screen.md({
    width: "38rem",
    height: "38rem",
  }),
});

export const loadingContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "10.8rem",
});

export const letterCaption = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
  textAlign: "center",
});
