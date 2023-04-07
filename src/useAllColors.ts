import { useState } from "react";
import { getColorsFromLocalStorage } from "./utilities/localStorage";

const useAllColors = () => {
  const [allColors, setAllColors] = useState(() => {
    const newColors = getColorsFromLocalStorage();
    return newColors.length === 0 ? [] : newColors;
  });

  return { allColors, setAllColors };
};

export default useAllColors;
