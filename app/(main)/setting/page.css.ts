import { style } from "@vanilla-extract/css";

export const settingPage = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "72rem",
  width: "100%",
  margin: "0 auto",
  padding: "1.2rem",
  paddingTop: "3.1rem",
});

export const itemsContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  marginTop: "2.4rem",
});
