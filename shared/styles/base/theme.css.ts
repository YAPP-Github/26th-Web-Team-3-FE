import { createTheme } from "@vanilla-extract/css";

import { colorTheme } from "../tokens/color";
import { textTheme } from "../tokens/text";
import { zIndexTheme } from "../tokens/z-index";

const tokens = {
  color: colorTheme,
  text: textTheme,
  zIndex: zIndexTheme,
};

const [themeClass, themeVars] = createTheme(tokens);
export { themeClass, themeVars };
