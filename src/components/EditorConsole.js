import React, { PureComponent } from "react";

import WebPlayer from "./WebPlayer";

export default class EditorConsole extends PureComponent {
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
