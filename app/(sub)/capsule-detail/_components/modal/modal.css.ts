import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",

  padding: 0,
  alignItems: "stretch",

  ...screen.md({
    padding: "20px",
    alignItems: "center",
  }),
});

export const content = style({
  backgroundColor: themeVars.color.black["90_bg"],
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

  maxWidth: "100vw",
  maxHeight: "100vh",
  width: "100%",
  height: "100%",
  borderRadius: "0px",

  ...screen.md({
    maxHeight: "90vh",
    borderRadius: "24px",
    width: "fit-content",
  }),
});

export const body = style({
  overflowY: "auto",
  flex: 1,
});
