import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import ColorsList from "./components/ColorsList";
import Container from "./components/Container";
import FilterForm from "./components/FilterForm";
import useAllColors from "./useAllColors";
import { sortColors } from "./utilities/sortColors";

const App = () => {
  const { allColors, setAllColors } = useAllColors();
  const [colors, setColors] = useState(allColors);

  useEffect(() => {
    setColors(sortColors(allColors));
  }, [allColors]);

  return (
    <div className="App">
      <Container>
        <AddForm setColors={setAllColors} />
        <FilterForm setColors={setColors} allColors={allColors} />
        <ColorsList
          colors={colors}
          setColors={setColors}
          allColors={allColors}
        />
      </Container>
    </div>
  );
};

export default App;
