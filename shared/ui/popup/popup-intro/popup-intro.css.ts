import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  backgroundColor: "transparent",
});

export const layout = style({
  width: "32.4rem",
  height: "54.1rem",
  position: "relative",
  overflow: "hidden",
});

export const popupContainer = style({
  width: "100%",
  height: "49rem",
  borderRadius: "20px",
  background: themeVars.color.gradient.blue_bg,
  overflow: "hidden",
});

export const captionWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.6rem",
  justifyContent: "center",
  ...themeVars.text.F22,
  color: themeVars.color.white[85],
});

export const buttonStyle = style({
  ...themeVars.text.F16,
  background: themeVars.color.white[100],
  color: themeVars.color.purple[50],
  borderRadius: "12px",
  width: "100%",
  height: "5.6rem",
});

export const buttonWrapper = style({
  padding: "2rem",
  marginTop: "2.6rem",
});

export const closeButton = style({
  position: "absolute",
  top: "2.2rem",
  right: "2.2rem",
  color: themeVars.color.white[85],
});

export const checkboxContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8rem",
  padding: "0.8rem 1.2rem",
  ...themeVars.text.F14,
  width: "100%",
  marginTop: "1rem",
});

export const radio = style({
  appearance: "none",
  width: "2rem",
  height: "2rem",
  border: `3px solid ${themeVars.color.white[5]}`,
  borderRadius: "10px",
  transition: "all 0.3s ease",

  selectors: {
    "&:checked": {
      border: `5px solid ${themeVars.color.purple[50]}`,
      borderRadius: "1rem",
    },
  },
});
