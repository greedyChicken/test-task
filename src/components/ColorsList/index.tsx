import React from "react";
import "./style.scss";
import { sortColors } from "../../utilities/sortColors";

interface MyProps {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>;
  allColors: string[];
}

class ColorsList extends React.Component<MyProps> {
  componentDidMount(): void {
    const { colors, setColors } = this.props;
    setColors(sortColors(colors));
  }

  componentDidUpdate(prevProps: MyProps) {
    const { colors, setColors, allColors } = this.props;
    if (allColors !== prevProps.allColors) {
      setColors(sortColors(colors));
    }
  }

  render() {
    const { colors } = this.props;

    return (
      <ul className="list">
        {colors.map((color, index) => {
          return (
            <li key={index} className="list__item">
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
  }
}

export default ColorsList;
