import {
  colorTheme,
  screenTheme,
  textTheme,
  zIndex,
} from "@/shared/styles/tokens";
import { style } from "@vanilla-extract/css";

export const navHomeStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  maxWidth: "var(--max-width)",
  width: "100%",
  height: "6.4rem",
  padding: "1rem",
  backgroundColor: colorTheme.gradient.header_bg,
  zIndex: zIndex.header.content,
});

export const navWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  ...screenTheme.md({
    gap: "1.6rem",
  }),
  padding: "0.4rem 0rem",
});

export const navList = style({
  display: "none",
  ...screenTheme.md({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.8rem",
  }),
});

export const buttonStyle = style({
  padding: "0.4rem 1rem",
  height: "4.2rem",
  borderRadius: "8px",
  ...textTheme.caption15,
  ":hover": {
    backgroundColor: colorTheme.white[5],
    color: colorTheme.purple[10],
  },
  transition: "all 0.2s ease-in-out",
});

export const searchButtonStyle = style({
  width: "4.4rem",
  height: "4.4rem",
});

export const menuButtonStyle = style({
  width: "4.4rem",
  height: "4.4rem",
  ...screenTheme.md({
    display: "none",
  }),
});
