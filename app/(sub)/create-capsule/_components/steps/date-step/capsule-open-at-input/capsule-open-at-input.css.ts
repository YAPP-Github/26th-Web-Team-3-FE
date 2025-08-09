import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const inputContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "0.8rem",
  marginBottom: "1.6rem",
});

export const labelStyle = style({
  width: "100%",
});

export const inputWrapper = style({
  display: "flex",
  gap: "0.5rem",
  ...screen.md({
    gap: "1rem",
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
