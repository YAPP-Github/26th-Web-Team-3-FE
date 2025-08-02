import { themeVars } from "@/shared/styles/base/theme.css";
import { screen } from "@/shared/styles/tokens/screen";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  backgroundColor: themeVars.color.black["90_bg"],
  padding: "7.2rem 1.2rem 2.1rem 1.2rem",
  ...screen.md({
    position: "fixed",
    bottom: "7rem",
    width: "calc(80rem - 3.4rem)",
    flexDirection: "row",
    margin: "0 1.7rem",
    padding: "1.2rem 1.2rem 1.2rem 2.4rem",
    background: themeVars.color.gradient.darkgray_op,
  }),
});

export const buttonContainer = style({
  display: "flex",
  gap: "1rem",
  width: "100%",
  order: 1,
  ...screen.md({
    width: "50%",
    order: 2,
  }),
});

export const buttonSoloContainer = style({
  display: "flex",
  gap: "1rem",
  width: "100%",
  order: 1,
  ...screen.md({
    marginLeft: "auto",
    width: "25%",
    order: 2,
  }),
});

export const captionContainer = style({
  ...themeVars.text.B2,
  color: themeVars.color.white[50],
  display: "flex",
  gap: "1rem",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "flex-start",
  order: 2,
  marginTop: "5.5rem",
  ...screen.md({
    width: "50%",
    alignSelf: "center",
    justifyContent: "flex-start",
    order: 1,
    marginTop: 0,
  }),
});

export const chipContainer = style({
  display: "flex",
  gap: "0.4rem",
});
