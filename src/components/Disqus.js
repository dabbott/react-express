import React, { Component } from "react";
import DisqusThread from "react-disqus-thread";

const prod = window.location.hostname.match("reactnativeexpress.com");
const shortname = prod ? "reactnativeexpress" : "reactnativeexpress-staging";

export default class Disqus extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { identifier, title, url } = this.props;

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
