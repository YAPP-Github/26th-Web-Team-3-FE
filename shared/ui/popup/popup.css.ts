import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: themeVars.color.black["90_bg"],
  borderRadius: "20px",
  padding: "3.2rem 1.2rem 1.2rem 1.2rem",
  zIndex: themeVars.zIndex.popup.content,
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "32.4rem",
});

export const title = style({
  ...themeVars.text.F17,
  color: themeVars.color.white[85],
  marginBottom: "0.8rem",
});

export const content = style({
  ...themeVars.text.F14,
  color: themeVars.color.white[40],
  marginBottom: "2.8rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const actions = style({
  display: "flex",
  ...themeVars.text.F17,
  justifyContent: "center",
  gap: "1rem",
  height: "4.8rem",
  width: "100%",
});

export const dim = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.7)",
  zIndex: themeVars.zIndex.popup.dim,
});

export const button = style({
  width: "100%",
  borderRadius: "12px",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.color.black[80],
    },
  },
});
