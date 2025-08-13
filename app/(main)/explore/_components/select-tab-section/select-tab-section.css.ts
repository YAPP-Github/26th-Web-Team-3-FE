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
  flex: 1,
});

export const dropdown = style({
  position: "absolute",
  right: "0",
  top: "100%",
  transform: "translateY(-180%)",
  marginRight: "1rem",
  ...screen.md({
    top: "100%",
    transform: "translateY(-90%)",
  }),
});
