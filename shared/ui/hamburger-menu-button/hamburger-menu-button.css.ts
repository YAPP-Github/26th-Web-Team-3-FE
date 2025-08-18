import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const menuButtonStyle = style({
  width: "4.4rem",
  height: "4.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  color: themeVars.color.white[85],
  ...screen.md({
    display: "none",
  }),
});

export const hamburgerIcon = style({
  position: "relative",
  width: "2rem",
  height: "2rem",
});

export const hamburgerLine = style({
  position: "absolute",
  left: "0",
  width: "100%",
  height: "2px",
  borderRadius: "10px",
  backgroundColor: themeVars.color.white[100],
  transition: "all 0.2s ease-in-out",
});

export const hamburgerLineTop = style([
  hamburgerLine,
  {
    top: "2px",
  },
]);

export const hamburgerLineMiddle = style([
  hamburgerLine,
  {
    top: "50%",
    transform: "translateY(-50%)",
  },
]);

export const hamburgerLineBottom = style([
  hamburgerLine,
  {
    bottom: "2px",
  },
]);

export const xIconTop = style({
  transform: "rotate(45deg) translate(5px, 5px)",
});

export const xIconMiddle = style({
  opacity: "0",
});

export const xIconBottom = style({
  transform: "rotate(-45deg) translate(5px, -5px)",
});
