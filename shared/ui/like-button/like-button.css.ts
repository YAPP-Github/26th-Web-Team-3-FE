import { themeVars } from "@/shared/styles/base/theme.css";
import { recipe } from "@vanilla-extract/recipes";

const baseStyle = {
  color: themeVars.color.white[60],
  width: "5rem",
  height: "5rem",
  padding: "1.4rem",
  borderRadius: "100px",
  selectors: {
    "&:hover": {
      color: themeVars.color.purple[20],
      backgroundColor: themeVars.color.purple[90],
      transition: "all 0.3s ease",
      transform: "scale(1.1)",
    },
  },
};

export const likeButton = recipe({
  base: {
    ...baseStyle,
  },
  variants: {
    liked: {
      true: {
        color: themeVars.color.purple[20],
        backgroundColor: themeVars.color.purple[90],
      },
      false: {
        ...baseStyle,
      },
    },
  },
});
