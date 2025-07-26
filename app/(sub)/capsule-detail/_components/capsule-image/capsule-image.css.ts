import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  margin: "3.2rem",
  ...screen.md({
    margin: "5.6rem",
  }),
});
