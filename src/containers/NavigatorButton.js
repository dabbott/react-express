import React, { Component } from "react";
import { Link } from "react-router";
import createStyles from "react-styles-provider";

@createStyles(({ vertical }) => ({
  container: {
    flexDirection: vertical ? "column-reverse" : "row",
    justifyContent: "space-between",
    alignItems: vertical ? "stretch" : "center",
    display: "flex"
  },
  item: {
    flex: "0 0 auto",
    padding: "10px 15px",
    backgroundColor: "rgb(210,210,210)",
    color: "white",
    borderRadius: 3,
    marginBottom: vertical ? 15 : 0,
    textAlign: "center"
  },
  nextItem: [
    "item",
    {
      backgroundColor: "rgb(54,203,170)"
    }
  ]
}))
export default class extends Component {
  render() {
    const { styles, nextSection, previousSection } = this.props;
    return (
      <div style={styles.container}>
        {previousSection
          ? <Link to={previousSection.slug} style={styles.item}>
              Previous - {previousSection.title}
            </Link>
          : <div />}
        {nextSection &&
          <Link to={nextSection.slug} style={styles.nextItem}>
            Next - {nextSection.title}
          </Link>}
      </div>
    );
  }
}
