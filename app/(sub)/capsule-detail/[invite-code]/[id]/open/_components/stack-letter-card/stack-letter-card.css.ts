import { style } from "@vanilla-extract/css";

export const card = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  padding: "2rem",
  width: "320px",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  backdropFilter: "blur(10px)",

  ":hover": {
    transform: "translate(-50%, -50%) scale(1.05)",
  },
});

export const imageContainer = style({
  borderRadius: "12px",
  overflow: "hidden",
  marginBottom: "1rem",
});

export const content = style({
  textAlign: "left",
});

export const text = style({
  fontSize: "1rem",
  lineHeight: 1.6,
  marginBottom: "1rem",
});

export const author = style({
  fontSize: "0.9rem",
  opacity: 0.8,
});
