import { useEffect, useReducer } from "react";
import "./style.scss";
import { filterColors } from "../../utilities/filterColors";
import { coreColors } from "../../coreColors";
import { State } from "../../utilities/stateInterface";

interface FilterFormProps {
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>;
  allColors: string[];
  setCoreColors: React.Dispatch<React.SetStateAction<Array<string>>>;
}

type Action =
  | { type: "redFilter" }
  | { type: "greenFilter" }
  | { type: "blueFilter" }
  | { type: "saturationFilter" }
  | { type: "setAllFalse" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "redFilter":
      return { ...state, redFilter: !state.redFilter };
    case "greenFilter":
      return { ...state, greenFilter: !state.greenFilter };
    case "blueFilter":
      return { ...state, blueFilter: !state.blueFilter };
    case "saturationFilter":
      return { ...state, saturationFilter: !state.saturationFilter };
    default:
      throw new Error();
  }
};

const FilterForm = ({
  setColors,
  allColors,
  setCoreColors,
}: FilterFormProps) => {
  const [state, dispatch] = useReducer(reducer, {
    redFilter: false,
    greenFilter: false,
    blueFilter: false,
    saturationFilter: false,
  });

  useEffect(() => {
    setColors(filterColors({ colors: allColors }, state));
    setCoreColors(filterColors({ colors: coreColors }, state));
  }, [
    state.redFilter,
    state.greenFilter,
    state.blueFilter,
    state.saturationFilter,
    allColors,
  ]);

  return (
    <form className="filter">
      <label>
        {"Red > 50%"}
        <input
          type="checkbox"
          checked={state.redFilter}
          onChange={() => dispatch({ type: "redFilter" })}
        />
      </label>
      <label>
        {"Green > 50%"}
        <input
          type="checkbox"
          checked={state.greenFilter}
          onChange={() => dispatch({ type: "greenFilter" })}
        />
      </label>
      <label>
        {"Blue > 50%"}
        <input
          type="checkbox"
          checked={state.blueFilter}
          onChange={() => dispatch({ type: "blueFilter" })}
        />
      </label>
      <label>
        {"Saturation > 50%"}
        <input
          type="checkbox"
          checked={state.saturationFilter}
          onChange={() => dispatch({ type: "saturationFilter" })}
        />
      </label>
    </form>
  );
};

export default FilterForm;
