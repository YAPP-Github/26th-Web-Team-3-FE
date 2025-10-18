import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const privacyPage = style({
  padding: "2rem",
  minHeight: "100vh",
  maxWidth: "80rem",
  margin: "0 auto",

  ...screen.md({
    padding: "3.2rem",
  }),
});

export const title = style({
  ...themeVars.text.H2,
  marginBottom: "3rem",
  textAlign: "center",
  color: themeVars.color.white[100],
});

export const content = style({
  lineHeight: "1.6",
});

export const section = style({
  marginBottom: "3rem",
});

export const sectionTitle = style({
  ...themeVars.text.H3,
  marginBottom: "1.5rem",
  color: themeVars.color.white[100],
  borderBottom: `1px solid ${themeVars.color.black[70]}`,
  paddingBottom: "0.8rem",
});

export const text = style({
  ...themeVars.text.B2,
  lineHeight: "1.8",
  color: themeVars.color.white[85],
  marginBottom: "1.2rem",
});

export const footer = style({
  marginTop: "5rem",
  paddingTop: "2rem",
  borderTop: `1px solid ${themeVars.color.black[70]}`,
  textAlign: "center",
  ...themeVars.text.F12,
  color: themeVars.color.white[60],
});
