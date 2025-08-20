import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/base/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const title = style({
  ...themeVars.text.F17,
  color: themeVars.color.white[100],
  marginTop: "2rem",
  marginBottom: "0.6rem",
});

export const description = style({
  ...themeVars.text.F16,
  color: themeVars.color.white[40],
});

export const button = style({
  marginTop: "1.6rem",
  ...themeVars.text.F14,
  color: themeVars.color.black[100],
  backgroundColor: themeVars.color.white[100],
  borderRadius: "8px",
  padding: "0.8rem 1.2rem",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.white[70],
    },
  },
});
