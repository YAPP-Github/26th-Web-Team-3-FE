import { style } from "@vanilla-extract/css";

export const colorSwatchContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

export const colorSwatchBox = style({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
});

export const colorSwatchLabel = style({
  fontSize: "12px",
  color: "#666",
  textAlign: "center",
});

export const colorGrid = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "40px",
  gap: "16px",
});

export const colorGridItems = style({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
});

export const colorContainer = style({
  padding: "20px",
  minHeight: "100vh",
});

export const colorTitle = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#222",
  margin: "32px 0 16px",
});
