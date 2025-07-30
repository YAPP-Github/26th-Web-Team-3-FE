import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const userGreetingSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "start",
  width: "100%",
  ...themeVars.text.H3,
});
