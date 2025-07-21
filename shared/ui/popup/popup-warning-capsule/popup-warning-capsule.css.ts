import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  width: "32.4rem",
  height: "23.85rem",
});

export const iconWrapper = style({
  marginBottom: "1.8rem",
});

export const backButton = style({
  width: "100%",
  color: themeVars.color.white[30],
  borderRadius: "12px",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.black[80],
    },
  },
});

export const continueButton = style({
  width: "100%",
  color: themeVars.color.purple[10],
  borderRadius: "12px",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.black[80],
    },
  },
});
