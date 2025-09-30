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
});

export const dropdownTrigger = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "1rem 1.5rem",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "none",
  borderRadius: "8px",
  color: "rgba(255, 255, 255, 0.85)",
  fontSize: "1.4rem",
  fontWeight: "500",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.10)",
    },
  },
});

export const dropdownIcon = style({
  transform: "rotate(90deg)",
  width: "1.6rem",
  height: "1.6rem",
});
