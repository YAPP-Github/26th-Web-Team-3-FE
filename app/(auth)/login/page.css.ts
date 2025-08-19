import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
});

export const header = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "8rem",
});

export const contentsContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "3.6rem",
  gap: "1rem",
  ...screen.md({
    marginTop: "7.2rem",
  }),
});

export const title = style({
  ...themeVars.text.H1,
  textAlign: "center",
});

export const caption = style({
  ...themeVars.text.B1,
  textAlign: "center",
  color: themeVars.color.white[60],
});

export const lettieImage = style({
  width: "24rem",
  height: "24rem",
  ...screen.md({
    width: "34rem",
    height: "34rem",
  }),
});

export const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "40rem",
  width: "100%",
  gap: "1.6rem",
  marginBottom: "10.8rem",
  padding: "1.6rem",
});

export const button = style({
  ...themeVars.text.F16,
  color: themeVars.color.white[85],
  display: "flex",
  gap: "1.3rem",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "5.2rem",
  borderRadius: "12px",
  backgroundColor: themeVars.color.black[80],
});
