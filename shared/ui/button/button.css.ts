import { themeVars } from "@/shared/styles/base/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  borderRadius: "12px",
  width: "100%",
  height: "5.6rem",
  ...themeVars.text.F16B,
});

export const buttonVariants = styleVariants({
  primary: [
    base,
    {
      color: themeVars.color.white[100],
      background: themeVars.color.gradient.point_purple,
      selectors: {
        "&:hover": {
          background: themeVars.color.gradient.dark_purple,
          color: themeVars.color.white[40],
        },
        "&:active": {
          background: themeVars.color.gradient.dark_purple,
          color: themeVars.color.white[40],
        },
        "&[disabled]": {
          backgroundColor: themeVars.color.black[80],
          background: themeVars.color.black[80],
          color: themeVars.color.white[40],
          cursor: "not-allowed",
        },
      },
    },
  ],
  secondary: [
    base,
    {
      color: themeVars.color.white[70],
      backgroundColor: themeVars.color.white[5],
      gap: "1.2rem",
      selectors: {
        "&:hover": {
          backgroundColor: themeVars.color.white[2],
          color: themeVars.color.white[40],
        },
        "&:active": {
          backgroundColor: themeVars.color.white[2],
          color: themeVars.color.white[40],
        },
      },
    },
  ],
});
