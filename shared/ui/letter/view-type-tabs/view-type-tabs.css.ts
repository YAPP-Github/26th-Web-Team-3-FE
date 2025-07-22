import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const viewTypeTabs = style({
  display: "flex",
  width: "18.4rem",
  height: "4.9rem",
  borderRadius: "50%",
});

export const tabButton = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.8rem",
    ...themeVars.text.F16,
    color: themeVars.color.white[100],
    padding: "1.2rem 1.8rem",
    borderRadius: "100px",
    transition: "all 0.3s ease",
  },
  variants: {
    isSelected: {
      true: {
        background: themeVars.color.gradient.point_purple,
      },
      false: {
        backgroundColor: "transparent",
      },
    },
  },
});

export const icon = recipe({
  variants: {
    isSelected: {
      true: {
        color: themeVars.color.white[100],
      },
      false: {
        color: themeVars.color.white[30],
      },
    },
  },
});
