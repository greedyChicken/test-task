import React from "react";
import "./style.scss";
import { saveColorsInLocalStorage } from "../../utilities/localStorage";

interface ColorsListProps {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>;
  coreColors: string[];
}

const ColorsList = ({ colors, setColors, coreColors }: ColorsListProps) => {
  const removeColor = (color: string) => {
    setColors((prevColors) => {
      const colorId = prevColors.indexOf(color);
      if (colorId !== -1)
        prevColors = [
          ...prevColors.slice(0, colorId),
          ...prevColors.slice(colorId + 1),
        ];

      saveColorsInLocalStorage(prevColors);
      return prevColors;
    });
  };

  return (
    <>
      <h3>Core colors</h3>
      <ul className="list">
        {coreColors.map((color, index) => {
          return (
            <li key={index} className="list__item">
              <div
                className="list__rectangle"
                style={{ "--my-color": color } as React.CSSProperties}
              ></div>
              <span>{color}</span>
            </li>
          );
        })}
      </ul>
      {colors.length > 0 && <h3>User's colors</h3>}
      <ul className="list">
        {colors.map((color, index) => {
          return (
            <li key={index} className="list__item">
              <div className="list__rectangle-wrapper">
                <div
                  className="list__rectangle"
                  style={{ "--my-color": color } as React.CSSProperties}
                ></div>
                <button
                  className="list__button"
                  onClick={() => removeColor(color)}
                >
                  x
                </button>
              </div>
              <span>{color}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ColorsList;
