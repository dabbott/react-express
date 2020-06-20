import React, { Component } from "react";
import DisqusThread from "react-disqus-thread";

const prod = window.location.hostname.match("react.express");
const shortname = prod ? "reactexpress" : "reactnativeexpress-staging";

export default class Disqus extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { identifier, title, url } = this.props;

    if (isServer) return false;

    return (
      <DisqusThread
        shortname={shortname}
        identifier={identifier}
        title={title}
        url={url}
      />
    );
  }
}
