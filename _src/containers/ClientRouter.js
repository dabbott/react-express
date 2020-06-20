import { Router, browserHistory, applyRouterMiddleware } from "react-router";
import React, { Component } from "react";
import useScroll from "react-router-scroll/lib/useScroll";

import * as Analytics from "../utils/Analytics";
import TopLevelRoute from "./TopLevelRoute";

export default class ClientRouter extends Component {
  render() {
    return (
      <Router
        history={browserHistory}
        onUpdate={Analytics.pageView}
        render={applyRouterMiddleware(useScroll())}
      >
        {TopLevelRoute}
      </Router>
    );
  }
}
