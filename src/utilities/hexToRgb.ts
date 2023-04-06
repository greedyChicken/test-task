export const hexToRgb = (color: string) => {
  let r = 0;
  let g = 0;
  let b = 0;

  if (color.length === 4) {
    r = parseInt(color.slice(1, 2).repeat(2), 16);
    g = parseInt(color.slice(2, 3).repeat(2), 16);
    b = parseInt(color.slice(3).repeat(2), 16);
  } else if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5), 16);
  }

  return [r, g, b];
};
