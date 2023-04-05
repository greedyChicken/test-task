import React, { useState } from "react";

// interface MyFormProps {
// 	onSubmit: (event: React.FormEvent) => void
// }

const AddForm = () => {
  const [color, setColor] = useState("");

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const onInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const validFirstChar = "#";
    const validator = /^#?([A-Fa-f0-9]){0,6}$/;

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
    <form onSubmit={onFormSubmit}>
      <input
        value={color}
        type="text"
        placeholder="color e.g. #FFFFFF"
        onChange={onInputChange}
      />
      <button>Add color</button>
    </form>
  );
};

export default AddForm;
