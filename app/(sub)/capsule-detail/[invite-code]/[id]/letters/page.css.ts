import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const stackContainer = style({
  color: "white",
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "3.2rem",
  paddingBottom: "8.13rem",
});

export const gridContainer = style({
  color: "white",
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "3.2rem",
  padding: "9.4rem 0",
});

export const header = style({
  display: "flex",
  width: "100vw",
  maxWidth: "120rem",
  height: "6.4rem",
  padding: "1rem 2.5rem",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "absolute",
  top: "0",
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
});

export const titleContainer = style({
  textAlign: "center",
  height: "fit-content",
});

export const title = style({
  ...themeVars.text.H2,
});

export const subtitle = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
});

export const cardContainer = style({
  position: "relative",
  marginBottom: "2rem",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  zIndex: themeVars.zIndex.openCapsuleBottom.content,
  position: "fixed",
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%)",
  width: "fit-content",
  gap: "1.2rem",
  padding: "3.2rem 0",
});

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  borderRadius: "50px",
  width: "11.6rem",
  height: "4.8rem",
  border: "none",
  cursor: "pointer",
  background: themeVars.color.gradient.point_purple,
  ...themeVars.text.F16B,
  color: themeVars.color.white[100],
});

export const noneButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  color: themeVars.color.white[30],
  width: "3rem",
  height: "4.8rem",
  border: "none",
  cursor: "pointer",
});

export const svgIcon = style({
  width: "1.8rem",
  height: "1.8rem",
});
