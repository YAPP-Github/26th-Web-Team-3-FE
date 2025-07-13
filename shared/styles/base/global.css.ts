import { globalStyle, style } from "@vanilla-extract/css";

/* CSS Variables */
globalStyle(":root", {
  vars: {
    "--max-width": "1200px",
  },
});

/* HTML & Body Styles */
globalStyle("html, body", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "0",
  padding: "0",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
  fontSize: "62.5%",
});

/* Scrollbar Hide */
globalStyle("::-webkit-scrollbar", {
  display: "none",
});

export const rootStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "0 auto",
  minHeight: "100dvh",
  maxWidth: "var(--max-width)",
});
