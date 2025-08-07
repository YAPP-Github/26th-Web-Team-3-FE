import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  width: "100%",
  maxWidth: "45rem",
  padding: "1.6rem",
  ...screen.md({
    paddingTop: "3.6rem",
  }),
});

export const lettieImage = style({
  justifyContent: "center",
  alignSelf: "center",
  width: "100%",
  ...screen.md({
    width: "34rem",
    height: "34rem",
  }),
});

export const inputSectionWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  width: "100%",
  alignSelf: "stretch",
  minWidth: "100%",
});

export const buttonContainer = style({
  width: "100%",
  paddingTop: "4rem",
  paddingBottom: "13.2rem",
  ...screen.md({
    paddingBottom: "16.1rem",
  }),
});
