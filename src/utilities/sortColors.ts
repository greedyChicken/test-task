import { hexToRgb } from "./hexToRgb";
import { rgbToHex } from "./rgbToHex";

export const sortColors = (colors: string[]) => {
  const newColors = colors.map((color) => hexToRgb(color));

  newColors.sort((b, a) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[2] - b[2];
    }
  });

  const sortedColors = newColors.map((color) => rgbToHex(color));

  return sortedColors;
};
