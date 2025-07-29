import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const chipContainer = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const chipWrapper = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "row",
  justifyContent: "center",
  // width: "100%" 제거 - 이제 필요 없음
});

export const chip = recipe({
  base: {
    ...themeVars.text.F15,
    padding: "1.2rem",
    height: "3.6rem",
    cursor: "pointer",
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

export const dropdown = style({
  position: "absolute",
  right: "0",
  top: "100%",
  transform: "translateY(-180%)",
  marginRight: "1rem",
  ...screen.md({
    top: "100%",
    transform: "translateY(-90%)",
  }),
});
