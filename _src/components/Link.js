import React, { Component } from "react";
import { Link } from "react-router";

export default class UniversalLink extends Component {
  render() {
    const { href, children } = this.props;

    if (href && href.match(/^https?:/)) {
      return <a {...this.props} />;
    } else {
      return <Link to={href}>{children}</Link>;
    }
  }
}
