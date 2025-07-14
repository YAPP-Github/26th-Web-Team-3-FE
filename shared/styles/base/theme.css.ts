import { createTheme } from "@vanilla-extract/css";

import { colorTheme } from "../tokens/color";
import { screenTheme } from "../tokens/screen";
import { textTheme } from "../tokens/text";
import { zIndexTheme } from "../tokens/z-index";

const tokens = {
  color: colorTheme,
  text: textTheme,
  zIndex: zIndexTheme,
};

const [themeClass, themeVars] = createTheme(tokens);

export { themeClass, themeVars, tokens, screenTheme as screen };
