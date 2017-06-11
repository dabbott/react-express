import React from "react";
import ReactDOM from "react-dom";

import Root from "./Root";
import { getSection } from "./utils/Sections";

const render = () => {
  ReactDOM.render(<Root />, document.getElementById("root"));
};

if (window.INITIAL_STATE) {
  const { location } = window.INITIAL_STATE;
  const { componentName } = getSection(location);

  // Preload the current page if it was rendered on the server.
  // This prevents a flicker when the component would render the loading screen.
  window.LOADED_MODULES = {};
  System.import(`./pages/${componentName}`).then(module => {
    window.LOADED_MODULES[componentName] = module.default;
    render();
  });
} else {
  render();
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./containers/Router", render);
}
