import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  width: "100%",
  maxWidth: "45rem",
  padding: "1.6rem",
  marginTop: "0.8rem",
  ...screen.md({
    paddingTop: "3.6rem",
  }),
});

export const titleCaption = style({
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  ...themeVars.text.H2,
  background: themeVars.color.gradient.light_purple,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  width: "100%",
});

export const lettieImage = style({
  width: "35rem",
  height: "35rem",
  ...screen.md({
    width: "38rem",
    height: "38rem",
  }),
});

export const buttonWrapper = style({
  width: "100%",
  padding: "1.6rem 1.6rem 11.7rem 1.6rem",
  ...screen.md({
    padding: "1.6rem 1.6rem 16.3rem 1.6rem",
  }),
});

export const letterCaption = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
  textAlign: "center",
});
