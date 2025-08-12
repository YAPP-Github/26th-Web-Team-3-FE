import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const loadingContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  cursor: "pointer",
});

export const loadingContainerDisabled = style({
  cursor: "default",
  pointerEvents: "none",
});

export const titleCaption = style({
  ...themeVars.text.H2,
  color: "#D399FF",
  marginBottom: "0.4rem",
  textAlign: "center",
});

export const lettieImage = style({
  width: "28rem",
  height: "28rem",
  ...screen.md({
    width: "34rem",
    height: "34rem",
  }),
});

export const subtitle = style({
  ...themeVars.text.B1,
  color: themeVars.color.white[40],
  textAlign: "center",
  transition: "opacity 0.3s ease",
});

export const subtitleLoading = style({
  opacity: 0,
});
