import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
  paddingTop: "11.7rem",
  ...screen.md({
    paddingTop: "15.3rem",
  }),
});

export const text = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[30],
});

export const image = style({
  width: "12rem",
  height: "6.45rem",
  ...screen.md({
    width: "16.8rem",
    height: "9.05rem",
  }),
});
