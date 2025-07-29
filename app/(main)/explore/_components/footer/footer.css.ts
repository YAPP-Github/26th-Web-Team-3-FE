import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "1.6rem",
  paddingBottom: "7.2rem",
});

export const footer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "2rem",
  backgroundColor: themeVars.color.white[5],
  borderRadius: "12px",
});

export const footerTitle = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[85],
});

export const footerDescription = style({
  ...themeVars.text.B2,
  color: themeVars.color.white[40],
});

export const button = style({
  padding: "0.6rem 1rem",
  height: "3.6rem",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.white[15],
    },
  },
});
