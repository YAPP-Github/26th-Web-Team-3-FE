import { themeVars } from "@/shared/styles/base/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const tabButton = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...themeVars.text.F15,
    padding: "1.2rem",
    height: "3.6rem",
    cursor: "pointer",
    borderRadius: "4px",
    backgroundColor: themeVars.color.white[5],
    selectors: {
      "&:hover": {
        backgroundColor: themeVars.color.white[15],
      },
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: themeVars.color.white[100],
        color: themeVars.color.black[100],
        selectors: {
          "&:hover": {
            color: themeVars.color.black[100],
            backgroundColor: themeVars.color.white[100],
          },
        },
      },
    },
  },
});
