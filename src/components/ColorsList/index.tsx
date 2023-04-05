import React from "react";
import "./style.scss";

interface MyProps {
  colors: string[];
}

const ColorsList = ({ colors }: MyProps) => {
  return (
    <ul>
      {colors.map((color, index) => {
        return (
          <li key={index}>
            <div
              className="rectangle"
              style={{ "--my-color": color } as React.CSSProperties}
            ></div>
            <span>{color}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ColorsList;
