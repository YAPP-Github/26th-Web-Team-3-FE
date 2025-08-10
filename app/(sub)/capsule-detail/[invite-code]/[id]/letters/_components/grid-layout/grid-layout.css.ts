import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  padding: "2rem",
  maxWidth: "120rem",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(16.4rem, 1fr))",
  gap: "2.8rem 1.2rem",
  margin: "0 auto",
  maxWidth: "120rem",
  ...screen.md({
    gridTemplateColumns: "repeat(auto-fill, minmax(24rem, 1fr))",
  }),
});
