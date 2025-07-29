import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "2.5rem",
});

export const closeButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  whiteSpace: "nowrap",
  ...themeVars.text.B2,
  color: themeVars.color.white[70],
  padding: "1.2rem",
});
