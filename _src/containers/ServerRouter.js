import { match, RouterContext } from "react-router";
import React, { Component, PropTypes } from "react";

import TopLevelRoute from "./TopLevelRoute";

export default class ServerRouter extends Component {
  static contextTypes = {
    location: PropTypes.string
  };

  render() {
    const { location } = this.context;
    let router = null;

    match({ routes: TopLevelRoute, location }, (err, redirect, props) => {
      router = <RouterContext {...props} />;
    });

    return router;
  }
}
