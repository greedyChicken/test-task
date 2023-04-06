export const rgbToHex = (color: Array<number>) => {
  let hex = "#";

  for (const element of color) {
    if (element < 16) {
      hex = hex + "0" + element.toString(16).toUpperCase();
      continue;
    }

    hex = hex + element.toString(16).toUpperCase();
  }

  return hex;
};
