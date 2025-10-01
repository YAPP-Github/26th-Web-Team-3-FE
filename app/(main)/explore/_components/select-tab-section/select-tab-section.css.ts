import { themeVars } from "@/shared/styles/base/theme.css";
import { colorTheme } from "@/shared/styles/tokens/color";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const chipContainer = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "100%",
});

export const leftContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  flex: 1,
});

export const rightContainer = style({
  display: "flex",
  justifyContent: "flex-start",
  flex: 1,
});

export const chipWrapper = style({
  display: "flex",
  gap: "0.6rem",
  flexDirection: "row",
  justifyContent: "center",
  flex: 1,
  ...screen.md({
    gap: "1.2rem",
  }),
});

export const dropdown = style({
  position: "relative",
  gap: "0.5rem",
});

export const dropdownTrigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ...themeVars.text.F15,
  gap: "0.5rem",
  padding: "1rem 1.5rem",
  minWidth: "11rem",
  backgroundColor: colorTheme.white[5],
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
});

export const dropdownContent = style({
  marginTop: "1.2rem",
});
