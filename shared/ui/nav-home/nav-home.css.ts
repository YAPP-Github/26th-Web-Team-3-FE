import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const navHomeStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "var(--max-width)",
  width: "100%",
  height: "6.4rem",
  padding: "1rem",
  background: themeVars.color.gradient.header_bg,
  zIndex: themeVars.zIndex.header.content,
});

export const navWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  ...screen.md({
    gap: "1.6rem",
  }),
  padding: "0.4rem 0rem",
});

export const navList = style({
  display: "none",
  ...screen.md({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
  }),
});

export const buttonStyle = style({
  display: "inline-flex",
  padding: "0.4rem 1rem",
  height: "4.2rem",
  borderRadius: "8px",
  ...themeVars.text.caption15,
  ":hover": {
    backgroundColor: themeVars.color.white[5],
    color: themeVars.color.purple[10],
  },
  transition: "all 0.2s ease-in-out",
  alignItems: "center",
  justifyContent: "center",
});

export const searchButtonStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "4.4rem",
  height: "4.4rem",
});

export const menuButtonStyle = style({
  width: "4.4rem",
  height: "4.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
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

export const menuContainer = style({
  position: "fixed",
  top: "6.4rem",
  left: "0",
  width: "100%",
  backgroundColor: themeVars.color.black["90_bg"],
  zIndex: themeVars.zIndex.header.content,
  transition: "max-height 0.2s ease-out, opacity 0.3s ease",
  maxHeight: 0,
  opacity: 0,
  ...screen.md({
    display: "none",
  }),
});

export const menuContainerOpen = style({
  maxHeight: "17.4rem",
  opacity: 1,
});

export const navHomeStyleOpen = style({
  background: themeVars.color.black["90_bg"],
});

export const menuItem = style({
  display: "block",
  width: "100%",
  textAlign: "start",
  padding: "1.6rem 2rem",
  ...themeVars.text.caption16,
  color: themeVars.color.white[100],
  cursor: "pointer",
  ":hover": {
    backgroundColor: themeVars.color.white[5],
  },
  transition: "all 0.2s ease-in-out",
});
