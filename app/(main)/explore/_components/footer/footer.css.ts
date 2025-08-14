import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "4rem 1.6rem 7.2rem 1.6rem",
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

export const mobileButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: themeVars.color.white[60],
  width: "4.4rem",
  height: "4.4rem",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: themeVars.color.white[5],
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.white[15],
    },
  },
  ...screen.md({
    display: "none",
    cursor: "default",
  }),
});

export const desktopButtonContainer = style({
  display: "none",
  cursor: "default",
  backgroundColor: themeVars.color.white[5],
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.white[15],
    },
  },
  ...screen.md({
    display: "flex",
    cursor: "pointer",
  }),
});
