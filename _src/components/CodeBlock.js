import React, { Component } from "react";
import createStyles, { responsive } from "react-styles-provider";

@responsive()
@createStyles({
  main: {
    overflowX: "auto"
  },
  header: {
    borderBottom: "2px solid #E4E4E4",
    paddingBottom: 4,
    marginBottom: 4,
    paddingTop: 2,
    color: "#A7A6B0",
    fontSize: "90%"
  }
})
export default class CodeBlock extends Component {
  render() {
    const { styles, children, filename } = this.props;

    return (
      <pre style={styles.main}>
        {filename &&
          <div style={styles.header}>
            {filename}
          </div>}
        <code>
          {children}
        </code>
      </pre>
    );
  }
}
