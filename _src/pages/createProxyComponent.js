import React, { Component, createElement } from "react";

import Loading from "./Loading";

export default relativePath => {
  let ProxiedComponent;

  const loadComponent = callback => {
    if (!ProxiedComponent) {
      // This needs to be relative to the current module otherwise Webpack won't know where to look
      System.import(`./${relativePath}`).then(module =>
        callback((ProxiedComponent = module.default))
      );
    }

    return ProxiedComponent;
  };

  class ComponentProxy extends Component {
    constructor(props) {
      super(props);

      if (isServer) {
        ProxiedComponent = require(`./${relativePath}`).default;
      }

      if (
        isClient &&
        window.LOADED_MODULES &&
        window.LOADED_MODULES[relativePath]
      ) {
        ProxiedComponent = window.LOADED_MODULES[relativePath];
      }

      this.state = {
        component: ProxiedComponent
      };
    }

    componentDidMount() {
      if (!this.state.component) {
        loadComponent(component => this.setState({ component }));
      }
    }

    render() {
      const { component } = this.state;

      if (!component) {
        return <Loading />;
      }

      return createElement(component, this.props);
    }
  }

  return ComponentProxy;
};
