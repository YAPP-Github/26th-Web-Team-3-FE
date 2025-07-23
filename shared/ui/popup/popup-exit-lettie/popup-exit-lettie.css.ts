import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const title = style({
  ...themeVars.text.F20,
});

export const captionContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  marginBottom: "2.4rem",
});

export const captionBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  width: "100%",
  height: "11.3rem",
  backgroundColor: themeVars.color.white[5],
  padding: "1.6rem",
  borderRadius: "12px",
});

export const captionTitle = style({
  ...themeVars.text.F16,
  color: themeVars.color.white[85],
  textAlign: "left",
  marginBottom: "1rem",
});

export const captionContent = style({
  ...themeVars.text.F16,
  color: themeVars.color.white[40],
  textAlign: "left",
  marginTop: "0.8rem",
});

export const inputText = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  width: "100%",
  paddingLeft: "0.8rem",
  ...themeVars.text.F16,
  color: themeVars.color.white[85],
  marginBottom: "1rem",
});

export const radio = style({
  appearance: "none",
  width: "2rem",
  height: "2rem",
  border: `3px solid ${themeVars.color.white[5]}`,
  borderRadius: "10px",
  transition: "all 0.3s ease",
  position: "relative",
  selectors: {
    "&:checked::after": {
      content: "",
      display: "block",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "1rem",
      height: "1rem",
      background: themeVars.color.white[15], // 원하는 색상
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
});
