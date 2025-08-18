import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  gap: "1.2rem",
  width: "100%",
  maxWidth: "45rem",
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

export const inputContainer = style({
  position: "relative",
  width: "100%",
});

export const titleInput = style({
  width: "100%",
  height: "5rem",
  borderRadius: "12px",
  ...themeVars.text.F17,
  paddingLeft: "2rem",
  paddingRight: "4rem",
  color: themeVars.color.white[100],
  background: themeVars.color.gradient.darkgray_op,
  selectors: {
    "&:placeholder": {
      color: themeVars.color.white[85],
    },
    "&:focus": {
      outline: "none",
      backgroundColor: themeVars.color.white[100],
      boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
      border: `1px blur ${themeVars.color.white[100]}`,
    },
  },
});

export const descriptionInput = style({
  width: "100%",
  height: "10rem",
  borderRadius: "12px",
  ...themeVars.text.F17,
  marginTop: "1.2rem",
  color: themeVars.color.white[100],
  background: themeVars.color.gradient.darkgray_op,
  padding: "1.4rem 3.9rem 2rem 2rem",
  resize: "none",
  whiteSpace: "normal",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  selectors: {
    "&:placeholder": {
      color: themeVars.color.white[85],
    },
    "&:focus": {
      outline: "none",
      backgroundColor: themeVars.color.white[100],
      boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
      border: `1px blur ${themeVars.color.white[100]}`,
    },
  },
});

export const charCountTitle = style({
  position: "absolute",
  right: "1.5rem",
  top: "50%",
  transform: "translateY(-50%)",
  ...themeVars.text.F15,
  color: themeVars.color.white[30],
  pointerEvents: "none",
});

export const charCountDescription = style({
  position: "absolute",
  right: "1.5rem",
  bottom: "10%",
  transform: "translateY(-20%)",
  ...themeVars.text.F15,
  color: themeVars.color.white[30],
  pointerEvents: "none",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: "1.4rem",
  paddingBottom: "11.7rem",
  alignSelf: "stretch",
  ...screen.md({
    paddingBottom: "14.5rem",
  }),
});
