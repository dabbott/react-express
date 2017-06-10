import { IndexRoute, Route } from "react-router";
import React from "react";

import App from "./App";
import Introduction from "../pages/Introduction";
import createProxyComponent from "../pages/createProxyComponent";
import sections from "../utils/Sections";

const routes = sections.map(section => {
  const { slug, componentName } = section;
  const component = createProxyComponent(componentName);

  return <Route key={slug} path={slug} component={component} />;
});

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Introduction} />
    <Route path={"intro"} component={Introduction} />
    {routes}
    {/* <Route path={"*"} component={NotFound} status={404} /> */}
  </Route>
);
