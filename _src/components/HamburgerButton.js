import React, { Component } from "react";
import createStyles from "react-styles-provider";

@createStyles({
  container: {
    padding: "15px 12px",
    width: 40,
    height: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    cursor: "pointer"
  },
  bar: {
    height: 2,
    backgroundColor: "rgb(38, 48, 83)",
    opacity: (props, { pressed }) => (pressed ? 0.3 : 0.8),
    transition: "opacity 0.1s"
  }
})
export default class HamburgerButton extends Component {
  static defaultProps = {
    barCount: 3,
    onPress: () => {}
  };

  state = { pressed: false };

  onMouseDown = () => this.setState({ pressed: true });

  onMouseUp = () => this.setState({ pressed: false });

  render() {
    const { getStyles, style, barCount, onPress } = this.props;
    const styles = getStyles(this.state);
    const elements = [];

    for (let i = 0; i < barCount; i++) {
      elements.push(<div key={i} style={styles.bar} />);
    }

    return (
      <div
        style={style}
        onClick={onPress}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        <div style={styles.container}>
          {elements}
        </div>
      </div>
    );
  }
}
