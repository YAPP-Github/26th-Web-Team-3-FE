import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingTop: "2.4rem",
  ...screen.md({
    paddingTop: "4.6rem",
  }),
});

export const title = style({
  ...themeVars.text.H2,
  color: themeVars.color.white[100],
});

export const description = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
});
