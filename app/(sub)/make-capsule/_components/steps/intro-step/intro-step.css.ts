import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  paddingTop: "1.6rem",
  ...screen.md({
    paddingTop: "3.6rem",
  }),
});

export const lettieImage = style({
  justifyContent: "center",
  alignSelf: "center",
  width: "26rem",
  height: "26rem",
  ...screen.md({
    width: "34rem",
    height: "34rem",
  }),
});

export const titleInput = style({
  width: "41.8rem",
  height: "5rem",
  borderRadius: "12px",
  ...themeVars.text.F17,
  paddingLeft: "2rem",
  color: themeVars.color.white[100],
  background: themeVars.color.gradient.darkgray_op,
  selectors: {
    "&:placeholder": {
      color: themeVars.color.white[85],
    },
    "&:focus": {
      outline: "none",
      backgroundColor: themeVars.color.white[100],
      boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)", // 기본적인 흐림 그림자
      border: `1px blur ${themeVars.color.white[100]}`,
    },
  },
});

export const descriptionInput = style({
  width: "41.8rem",
  height: "10rem",
  borderRadius: "12px",
  ...themeVars.text.F17,
  paddingLeft: "2rem",
  color: themeVars.color.white[100],
  background: themeVars.color.gradient.darkgray_op,
  paddingBottom: "4rem",
  selectors: {
    "&:placeholder": {
      color: themeVars.color.white[85],
    },
    "&:focus": {
      outline: "none",
      backgroundColor: themeVars.color.white[100],
      boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)", // 기본적인 흐림 그림자
      border: `1px blur ${themeVars.color.white[100]}`,
    },
  },
});
