import React, { PureComponent } from "react";

import WebPlayer from "./WebPlayer";

export default class EditorTranspiler extends PureComponent {
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
