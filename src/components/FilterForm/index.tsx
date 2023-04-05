const FilterForm = () => {
  return (
    <form action="" className="filter">
      <label>
        {"Red > 50%"}
        <input type="checkbox" />
      </label>
      <label>
        {"Green > 50%"}
        <input type="checkbox" />
      </label>
      <label>
        {"Blue > 50%"}
        <input type="checkbox" />
      </label>
      <label>
        {"Saturation > 50%"}
        <input type="checkbox" />
      </label>
    </form>
  );
};

export default FilterForm;
