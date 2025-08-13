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

export const chipWrapper = style({
  display: "flex",
  gap: "1.2rem",
  flexDirection: "row",
  justifyContent: "center",
});

export const dropdown = style({
  position: "absolute",
  right: 0,
  top: 0,
  marginRight: "1rem",
  ...screen.md({
    top: 0,
    right: 0,
  }),
});
