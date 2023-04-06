import { useEffect, useState } from "react";
import { hexToRgb } from "../../utilities/hexToRgb";
import { rgbToHex } from "../../utilities/rgbToHex";
import { getSaturation } from "../../utilities/getSaturation";
import { sortColors } from "../../utilities/sortColors";

interface MyProps {
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>;
  allColors: string[];
}

const FilterForm = ({ setColors, allColors }: MyProps) => {
  const [redFilter, setRedFilter] = useState(false);
  const [greenFilter, setGreenFilter] = useState(false);
  const [blueFilter, setBlueFilter] = useState(false);
  const [saturationFilter, setSaturationFilter] = useState(false);

  const filterColors = () => {
    let newColors = allColors.map((color) => hexToRgb(color));

    if (redFilter) {
      newColors = newColors.filter((color) => color[0] > 127);
    }
    if (greenFilter) {
      newColors = newColors.filter((color) => color[1] > 127);
    }
    if (blueFilter) {
      newColors = newColors.filter((color) => color[2] > 127);
    }
    if (saturationFilter) {
      newColors = newColors.filter((color) => getSaturation(color) > 0.5);
    }

    const sortedColors = sortColors(newColors.map((color) => rgbToHex(color)));
    setColors(sortedColors);
  };

  useEffect(() => {
    filterColors();
  }, [redFilter, greenFilter, blueFilter, saturationFilter]);

  return (
    <form className="filter">
      <label>
        {"Red > 50%"}
        <input
          type="checkbox"
          checked={redFilter}
          onChange={() => setRedFilter(!redFilter)}
        />
      </label>
      <label>
        {"Green > 50%"}
        <input
          type="checkbox"
          checked={greenFilter}
          onChange={() => setGreenFilter(!greenFilter)}
        />
      </label>
      <label>
        {"Blue > 50%"}
        <input
          type="checkbox"
          checked={blueFilter}
          onChange={() => setBlueFilter(!blueFilter)}
        />
      </label>
      <label>
        {"Saturation > 50%"}
        <input
          type="checkbox"
          checked={saturationFilter}
          onChange={() => setSaturationFilter(!saturationFilter)}
        />
      </label>
    </form>
  );
};

export default FilterForm;
