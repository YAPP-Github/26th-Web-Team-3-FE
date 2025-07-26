import { colorTheme } from "@/shared/styles/tokens/color";
import { textTheme } from "@/shared/styles/tokens/text";
import { style, styleVariants } from "@vanilla-extract/css";

export const chipBase = style({
  width: "fit-content",
  height: "2.5rem",
  whiteSpace: "pre",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  padding: "0px 4px 0px 4px",
});

export const chipVariant = styleVariants({
  purple: {
    color: colorTheme.purple[10],
    backgroundColor: colorTheme.purple[90],
  },
  gray: {
    color: colorTheme.white[70],
    backgroundColor: colorTheme.white[5],
  },
});

export const chipSize = styleVariants({
  small: {
    fontSize: textTheme.F12.fontSize,
    fontWeight: textTheme.F12.fontWeight,
    lineHeight: textTheme.F12.lineHeight,
    letterSpacing: textTheme.F12.letterSpacing,
    height: "1.9rem",
  },
  default: {
    fontSize: textTheme.F14.fontSize,
    fontWeight: textTheme.F14.fontWeight,
    lineHeight: textTheme.F14.lineHeight,
    letterSpacing: textTheme.F14.letterSpacing,
    height: "2.25rem",
  },
});
