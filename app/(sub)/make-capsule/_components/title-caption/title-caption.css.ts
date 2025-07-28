import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const titleCaption = style({
  ...themeVars.text.H2,
  whiteSpace: "pre-line",
  textAlign: "center",
  marginTop: "1.6rem",
  ...screen.md({
    marginTop: "3.6rem",
  }),
});
