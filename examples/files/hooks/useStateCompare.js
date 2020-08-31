import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");
  const [pet, setPet] = useState("cat");

  return (
    <div>
      <label>Choose a color and a pet: </label>
      <br />
      <select
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
      >
        <option value={"black"}>Black</option>
        <option value={"pink"}>Pink</option>
        <option value={"blue"}>Blue</option>
      </select>
      <select
        value={pet}
        onChange={(event) => {
          setPet(event.target.value);
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
