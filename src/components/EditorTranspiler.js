import React, { Component } from "react";

import WebPlayer from "./WebPlayer";

export default class EditorTranspiler extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <WebPlayer
        height={340}
        fullscreen={false}
        showTranspiler={true}
        transpilerTitle={"Output compiled with Babel"}
        {...this.props}
      />
    );
  }
}
