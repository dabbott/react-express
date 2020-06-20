import React from "react";
import { AppContainer } from "react-hot-loader";
import { ResponsiveProvider } from "react-styles-provider";

import Router from "./containers/Router";

const calculateResponsiveBreakpoints = ({ width, isMobile }) => {
  const attributes = [];

  if (width > 1280) {
    attributes.push("large");
  } else if (width > 800) {
    attributes.push("medium");
  } else {
    attributes.push("small");
  }

  if (isMobile) {
    attributes.push("mobile");
  } else {
    attributes.push("desktop");
  }

  return attributes.join("-");
};

export default () =>
  <AppContainer>
    <ResponsiveProvider set={calculateResponsiveBreakpoints}>
      <Router />
    </ResponsiveProvider>
  </AppContainer>;
