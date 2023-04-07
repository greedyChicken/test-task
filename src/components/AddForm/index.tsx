import React, { useState } from "react";
import { saveColorsInLocalStorage } from "../../utilities/localStorage";
import "./style.scss";

interface AddFormProps {
  setAllColors: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const AddForm = ({ setAllColors }: AddFormProps) => {
  const [color, setColor] = useState("");

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (color.length === 4 || color.length === 7) {
      setAllColors((prevColors) => {
        const newColors = [...prevColors, color];
        saveColorsInLocalStorage(newColors);

        return newColors;
      });

      setColor("");
    }
  };

  const onInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const validFirstChar = "#";
    const validator = /^#?([A-Fa-f0-9]){0,6}$/;
    value = value.toUpperCase();

    switch (color.length) {
      case 0:
        value === validFirstChar && setColor(value);
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        validator.test(value) && setColor(value);
        break;
      case 7:
        if (value.length < 7 && validator.test(value)) setColor(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        value={color}
        type="text"
        placeholder="color e.g. #FFFFFF or #FFF"
        onChange={onInputChange}
        className="form__input"
      />
      <button className="form__button">Add color</button>
    </form>
  );
};

export default AddForm;
