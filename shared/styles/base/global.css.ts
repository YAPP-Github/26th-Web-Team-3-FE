import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

/* CSS Variables */
globalStyle(":root", {
  vars: {
    "--max-width": "1200px",
  },
});

/* HTML & Body Styles */
globalStyle("html, body", {
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
  height: "100dvh",
  margin: "0 auto",
  maxWidth: "var(--max-width)",
  backgroundColor: themeVars.color.black["90_bg"],
  color: themeVars.color.white[100],
});

export const globalLayout = style({
  width: "100%",
  height: "100%",
});
