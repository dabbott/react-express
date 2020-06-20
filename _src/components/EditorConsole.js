import React, { Component } from "react";

import WebPlayer from "./WebPlayer";

export default class EditorConsole extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <WebPlayer
        height={340}
        fullscreen={false}
        playerTitle={"Console output"}
        showConsole={true}
        {...this.props}
      />
    );
  }
}
