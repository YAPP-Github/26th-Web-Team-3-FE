import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
  gap: "1rem",
  width: "100%",
  padding: "1rem",
  paddingTop: "2.3rem",
  margin: "0 auto",
  ...screen.sm({
    gridTemplateColumns: "repeat(2, 1fr)",
  }),
  ...screen.md({
    gridTemplateColumns: "repeat(3, 1fr)",
  }),
  ...screen.lg({
    gridTemplateColumns: "repeat(4, 1fr)",
  }),
});
