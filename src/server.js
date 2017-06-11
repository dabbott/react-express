import { Helmet } from "react-helmet";
import React, { Component, PropTypes } from "react";

import Root from "./Root";
export * as Sections from "./utils/Sections";

export default class App extends Component {
  static childContextTypes = {
    location: PropTypes.string
  };

  getChildContext() {
    const { location } = this.props;

    return { location };
  }

  render() {
    return <Root />;
  }
}

export const AppHelmet = Helmet;
