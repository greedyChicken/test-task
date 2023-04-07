import { useState } from "react";
import AddForm from "./components/AddForm";
import ColorsList from "./components/ColorsList";
import Container from "./components/Container";
import FilterForm from "./components/FilterForm";
import useAllColors from "./useAllColors";
import { coreColors } from "./coreColors";

const App = () => {
  const { allColors, setAllColors } = useAllColors();
  const [colors, setColors] = useState(allColors);
  const [currentCoreColors, setCurrentCoreColors] = useState(coreColors);

  return (
    <Container>
      <AddForm setAllColors={setAllColors} />
      <FilterForm
        setColors={setColors}
        allColors={allColors}
        setCoreColors={setCurrentCoreColors}
      />
      <ColorsList
        colors={colors}
        setColors={setAllColors}
        coreColors={currentCoreColors}
      />
    </Container>
  );
};

export default App;
