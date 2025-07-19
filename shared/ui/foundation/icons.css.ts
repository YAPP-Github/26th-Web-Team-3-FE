import { colorTheme } from "@/shared/styles/tokens/color";
import { style } from "@vanilla-extract/css";

export const iconsContainer = style({
  padding: "20px",
  minHeight: "100vh",
});

export const iconsTitle = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#212529",
  margin: "32px 0 16px",
});

export const iconGrid = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "40px",
  gap: "16px",
});

export const iconGridItems = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: "16px",
});

export const iconItemContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: colorTheme.black["90_bg"],
  border: "1px solid #e9ecef",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out",

  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
});

export const iconBox = style({
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "8px",
  color: "#495057",
});

export const iconName = style({
  fontSize: "12px",
  color: "#6c757d",
  textAlign: "center",
  fontFamily: "monospace",
  wordBreak: "break-word",
});

export const iconCategory = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#495057",
  marginBottom: "16px",
});
