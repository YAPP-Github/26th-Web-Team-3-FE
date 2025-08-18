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

export const image = style({
  width: "18.9rem",
  height: "21rem",
  ...screen.md({
    width: "25.2rem",
    height: "28rem",
  }),
});
