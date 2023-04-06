export const getSaturation = (color: Array<number>) => {
  const M = Math.max(...color);
  const m = Math.min(...color);
  const d = (M - m) / 255;
  const L = (M + m) / 510;
  let S = 0;

  if (L > 0) {
    S = d / (1 - Math.abs(2 * L - 1));
  }

  return S;
};
