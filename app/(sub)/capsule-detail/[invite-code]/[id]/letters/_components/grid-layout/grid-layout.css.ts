import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  maxWidth: "120rem",
  padding: "0.8rem",
  ...screen.md({
    padding: "1.6rem",
  }),
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(16.4rem, 1fr))",
  margin: "0 auto",
  maxWidth: "120rem",
  gap: "2.4rem 0.8rem",
  ...screen.md({
    gridTemplateColumns: "repeat(auto-fill, minmax(24rem, 1fr))",
    gap: "2.8rem 1.2rem",
  }),
});
