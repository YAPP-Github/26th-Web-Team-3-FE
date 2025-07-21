import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const title = style({
  marginTop: "0.4rem",
});

export const closeButton = style({
  color: themeVars.color.purple[10],
});

export const copyButton = style({
  color: themeVars.color.white[40],
});

export const captionContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "1rem",
  width: "100%",
  height: "5.8rem",
  borderRadius: "12px",
  backgroundColor: themeVars.color.white[5],
  padding: "1.6rem 0",
  marginBottom: "1.6rem",
  ...themeVars.text.F16,
  color: themeVars.color.white[85],
});
