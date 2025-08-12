import { themeVars } from "@/shared/styles/base/theme.css";
import { style } from "@vanilla-extract/css";

export const caption = style({
  marginBottom: "2.8rem",
});

export const putButton = style({
  color: themeVars.color.purple[10],
});

export const iconWrapper = style({
  marginBottom: "1.8rem",
  color: themeVars.color.white[60],
});
