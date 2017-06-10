import React from "react";
import ReactDOM from "react-dom";

import Root from "./root";

const render = () => {
  ReactDOM.render(<Root />, document.getElementById("root"));
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./containers/Router", render);
}
