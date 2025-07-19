import { style } from "@vanilla-extract/css";

export const typographyContainer = style({
  padding: "20px",
  backgroundColor: "#0a0a0a",
  minHeight: "100vh",
});

export const typographyTitle = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#fff",
  margin: "32px 0 16px",
});

export const typographyItemContainer = style({
  marginBottom: "32px",
  padding: "16px",
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
});

export const typographyItemName = style({
  fontSize: "14px",
  color: "#999",
  marginBottom: "8px",
  fontFamily: "monospace",
  display: "block",
});

export const typographyItemDetails = style({
  fontSize: "12px",
  color: "#666",
  marginTop: "8px",
  fontFamily: "monospace",
});

export const typographyItemDetail = style({
  display: "block",
  marginBottom: "4px",
});
