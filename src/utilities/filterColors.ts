import { getSaturation } from "./getSaturation";
import { hexToRgb } from "./hexToRgb";
import { rgbToHex } from "./rgbToHex";
import { sortColors } from "./sortColors";
import { State } from "./stateInterface";

interface MyProps {
  colors: string[];
}

export const filterColors = ({ colors }: MyProps, state: State) => {
  let newColors = colors.map((color) => hexToRgb(color));

  if (state.redFilter) {
    newColors = newColors.filter((color) => color[0] > 127);
  }

  if (state.greenFilter) {
    newColors = newColors.filter((color) => color[1] > 127);
  }

  if (state.blueFilter) {
    newColors = newColors.filter((color) => color[2] > 127);
  }

  if (state.saturationFilter) {
    newColors = newColors.filter((color) => getSaturation(color) > 0.5);
  }

  const sortedColors = sortColors(newColors.map((color) => rgbToHex(color)));

  return sortedColors;
};
