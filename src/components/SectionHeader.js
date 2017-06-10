import React, { Component } from "react";
import createStyles, { responsive } from "react-styles-provider";

@responsive()
@createStyles({
  main: {
    fontSize: 20,
    fontWeight: 300,
    marginTop: props => (props.responsive.match("mobile") ? 20 : 60),
    marginBottom: 15
  }
})
export default class PageHeader extends Component {
  render() {
    const { styles, children } = this.props;

    return (
      <div style={styles.main}>
        {children}
      </div>
    );
  }
}
