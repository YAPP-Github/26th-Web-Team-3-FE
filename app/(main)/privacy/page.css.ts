import { style } from "@vanilla-extract/css";

export const privacyPage = style({
  padding: "20px",
  minHeight: "100vh",
  maxWidth: "800px",
  margin: "0 auto",
});

export const title = style({
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "30px",
  textAlign: "center",
  color: "#ffffff",
});

export const content = style({
  lineHeight: "1.6",
});

export const section = style({
  marginBottom: "30px",
});

export const sectionTitle = style({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#ffffff",
  borderBottom: "2px solid #444",
  paddingBottom: "8px",
});

export const text = style({
  fontSize: "14px",
  lineHeight: "1.8",
  color: "#dddddd",
  marginBottom: "12px",
});

export const infoBox = style({
  backgroundColor: "#2a2a2a",
  padding: "20px",
  borderRadius: "8px",
  marginTop: "30px",
  marginBottom: "30px",
});

export const list = style({
  listStyle: "none",
  padding: 0,
  margin: "10px 0",
  color: "#dddddd",
});

export const footer = style({
  marginTop: "50px",
  paddingTop: "20px",
  borderTop: "1px solid #444",
  textAlign: "center",
  color: "#999",
  fontSize: "12px",
});