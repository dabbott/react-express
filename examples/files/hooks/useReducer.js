import React, { useReducer } from "react";

const PET = "pet";
const COLOR = "color";

const petReducer = (state, action) => {
  switch (action.type) {
    case PET:
      return { ...state, pet: action.value };
    case COLOR:
      return { ...state, color: action.value };
    default:
      throw new Error("Unexpected Action");
  }
};

const App = () => {
  const [{ color, pet }, dispatch] = useReducer(petReducer, {
    color: "black",
    pet: "cat",
  });

  return (
    <div>
      <label>Choose a color and a pet: </label>
      <br />
      <select
        value={color}
        onChange={(event) => {
          dispatch({ type: COLOR, value: event.target.value });
        }}
      >
        <option value={"black"}>Black</option>
        <option value={"pink"}>Pink</option>
        <option value={"blue"}>Blue</option>
      </select>
      <select
        value={pet}
        onChange={(event) => {
          dispatch({ type: PET, value: event.target.value });
        }}
      >
        <option value={"cat"}>Cat</option>
        <option value={"dog"}>Dog</option>
        <option value={"mouse"}>Mouse</option>
      </select>
      <br />
      <br />
      You chose a {color} {pet}
    </div>
  );
};

export default App;
