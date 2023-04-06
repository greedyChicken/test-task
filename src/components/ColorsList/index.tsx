import React, { useEffect } from "react";
import "./style.scss";
import { sortColors } from "../../utilities/sortColors";

interface MyProps {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>;
  allColors: string[];
}

const ColorsList = ({ colors, setColors, allColors }: MyProps) => {
  useEffect(() => {
    setColors(sortColors(colors));
  }, [allColors]);

  return (
    <ul>
      {colors.map((color, index) => {
        return (
          color && (
            <li key={index}>
              <div
                className="rectangle"
                style={{ "--my-color": color } as React.CSSProperties}
              ></div>
              <span>{color}</span>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default ColorsList;
