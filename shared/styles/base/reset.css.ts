import { globalStyle } from "@vanilla-extract/css";

// Universal reset
globalStyle("*, *::before, *::after", {
  padding: 0,
  margin: 0,
  border: 0,
  fontSize: "inherit",
  verticalAlign: "baseline",
  boxSizing: "border-box",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

// Body
globalStyle("body", {
  WebkitTextSizeAdjust: "none",
});

// Block elements
globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  },
);

// Lists
globalStyle("ol, ul", {
  listStyle: "none",
});

// Button
globalStyle("button", {
  outline: 0,
  border: 0,
  font: "inherit",
  cursor: "pointer",
  background: "none",
});

// Form inputs
globalStyle("input, textarea", {
  border: 0,
  outline: "none",
  background: "none",
  font: "inherit",
});

globalStyle("input:focus, textarea:focus", {
  outline: "none",
});

globalStyle("textarea", {
  resize: "none",
});

// Links
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("a:link, a:visited, a:hover, a:active", {
  textDecoration: "none",
  color: "inherit",
});

// Images
globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
  verticalAlign: "top",
});

// Table
globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
