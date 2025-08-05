import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
  minHeight: "100vh",
  color: "white",
  position: "relative",
  width: "100%",
});

export const header = style({
  textAlign: "center",
  marginBottom: "3rem",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

export const subtitle = style({
  fontSize: "1rem",
  opacity: 0.7,
});

export const cardContainer = style({
  position: "relative",
  height: "60vh",
  marginBottom: "2rem",
});

export const pagination = style({
  textAlign: "center",
  marginBottom: "2rem",
  opacity: 0.7,
});

export const shareButton = style({
  background: "#8b5cf6",
  color: "white",
  border: "none",
  borderRadius: "24px",
  padding: "12px 24px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
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
  borderRadius: "50px",
  width: "11.6rem",
  height: "4.8rem",
});

export const noneButton = style({
  background: "none",
  color: themeVars.color.white[30],
  width: "3rem",
  height: "4.8rem",
  border: "none",
});

export const svgIcon = style({
  width: "1.8rem",
  height: "1.8rem",
});
