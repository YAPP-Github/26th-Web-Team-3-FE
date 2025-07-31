import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.2rem",
  maxWidth: "45rem",
  width: "100%",
  padding: "1.6rem",
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

export const inputSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  width: "100%",
  alignSelf: "stretch",
  minWidth: "100%",
});

export const inputContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  width: "100%",
});

export const labelStyle = style({
  width: "100%",
});

export const inputWrapper = style({
  display: "flex",
  gap: "0.5rem", // 모바일에서 간격 줄임
  width: "100%",
  ...screen.md({
    gap: "1rem", // 웹에서는 원래 간격
  }),
});

export const inputCaption = style({
  ...themeVars.text.F14,
  color: themeVars.color.white[30],
});

export const inputStyle = style({
  ...themeVars.text.F15,
  color: themeVars.color.white[30],
  backgroundColor: themeVars.color.white[5],
  border: `1px ${themeVars.color.white[30]}`,
  borderRadius: "12px",
  width: "100%",
  height: "5rem",
  padding: "0 0.5rem",
  ...screen.md({
    padding: "0 2rem",
    ...themeVars.text.F17,
    color: themeVars.color.white[30],
  }),
  selectors: {
    "&::-webkit-calendar-picker-indicator": {
      filter: "invert(1) brightness(0.5)",
      cursor: "pointer",
    },
    "&::-webkit-time-picker-indicator": {
      filter: "invert(1) brightness(0.5)",
      cursor: "pointer",
    },
  },
});

export const buttonContainer = style({
  width: "100%",
  paddingTop: "4rem",
  paddingBottom: "13.2rem",
  ...screen.md({
    paddingBottom: "16.1rem",
  }),
});
