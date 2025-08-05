// stack-layout.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "60vh",
  maxWidth: "600px",
  margin: "0 auto",
});

export const stackContainer = style({
  position: "relative",
  width: "350px",
  height: "450px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 2rem",
});

export const cardWrapper = style({
  width: "100%",
  height: "100%",
});

export const navButton = style({
  background: "rgba(255, 255, 255, 0.1)",
  border: "none",
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  cursor: "pointer",
  zIndex: 20,

  ":hover": {
    background: "rgba(255, 255, 255, 0.2)",
  },

  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
});

export const pagination = style({
  position: "absolute",
  bottom: "-60px",
  left: "50%",
  transform: "translateX(-50%)",
  color: "white",
  opacity: 0.7,
});

export const dots = style({
  position: "absolute",
  bottom: "-40px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "8px",
});

export const dot = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(255, 255, 255, 0.3)",
  cursor: "pointer",

  ":hover": {
    background: "rgba(255, 255, 255, 0.5)",
  },
});

export const activeDot = style({
  background: "rgba(255, 255, 255, 0.8)",
});
