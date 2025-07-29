import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";
export const chipContainer = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "row",
  justifyContent: "center",
});

export const chip = style({
  ...themeVars.text.F15,
  padding: "1.2rem",
  height: "3.6rem",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.white[15],
    },
  },
});
