import AddForm from "./components/AddForm";
import ColorsList from "./components/ColorsList";
import Container from "./components/Container";
import FilterForm from "./components/FilterForm";
import { colors } from "./colorsList";

const App = () => {
  return (
    <div className="App">
      <Container>
        <AddForm />
        <FilterForm />
        <ColorsList colors={colors} />
      </Container>
    </div>
  );
};

export default App;
