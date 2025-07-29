import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
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
