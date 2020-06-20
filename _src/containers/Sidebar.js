import React, { Component, PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import createStyles from "react-styles-provider";

import { chapters } from "../utils/Sections";

@createStyles(({ centered }) => ({
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 300,
    paddingLeft: centered ? 0 : 35,
    textAlign: centered ? "center" : "left",
    lineHeight: "60px",
    color: "#263053",
    margin: 0,
    borderBottom: "1px solid rgba(220,220,220,0.5)"
  },
  sidebarTitleLink: {
    flex: "0 0 auto"
  },
  rowsContainer: {
    overflowY: "auto",
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: centered ? "center" : "stretch",
    backgroundColor: "white"
  },
  row: {
    flex: "0 0 40px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: centered ? 0 : 35,
    fontSize: 16,
    fontWeight: 300,
    color: "#263053",
    margin: 0
  },
  numeral: {
    flex: "0 0 50px",
    display: centered ? "none" : "initial"
  },
  dotContainer: {
    flex: "0 0 60px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  },
  dot: {
    flex: "0 0 auto",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#DEDFE8"
  },
  link: {
    textDecoration: "underline",
    fontWeight: 500
  },
  patchRow: [
    "row",
    {
      fontSize: 13
      // paddingLeft: centered ? 0 : 45,
    }
  ],
  linkText: {
    color: "#263053"
  },
  expandButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "rgba(38,48,83,0.35)",
    padding: "1px 4px",
    backgroundColor: "#DEDFE8",
    textDecoration: "none",
    borderRadius: 10,
    alignSelf: "center",
    lineHeight: "0px",
    height: 10,
    marginLeft: 10,
    cursor: "pointer",
    opacity: 1
  },
  expandButtonActive: [
    "expandButton",
    {
      opacity: 0.5
    }
  ]
}))
export default class Sidebar extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor(props) {
    super();

    this.state = this.buildState(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSection !== this.props.currentSection) {
      this.setState(this.buildState(nextProps));
    }
  }

  buildState(props) {
    const { currentSection } = props;
    const expanded = {};

    if (currentSection) {
      const { depth, slug, parent } = currentSection;

      if (depth === 1) {
        expanded[slug] = true;
      } else if (depth === 2) {
        expanded[parent] = true;
      }
    }

    return { expanded };
  }

  onToggleSection = slug =>
    this.setState({
      expanded: {
        ...this.state.expanded,
        [slug]: !this.state.expanded[slug]
      }
    });

  renderRow = (
    { title, slug, depth, major, minor, patch, parent },
    i,
    list
  ) => {
    const { styles } = this.props;
    const { expanded } = this.state;

    if (depth === 2 && !expanded[parent]) {
      return null;
    }

    let numeral = `${major}`;

    if (depth >= 1) {
      numeral += `.${minor}`;
    }

    if (depth >= 2) {
      numeral += `.${patch}`;
    }

    const majorOrMinor = depth === 0 || depth === 1;
    const hasChildSection =
      depth === 1 && list[i + 1] && list[i + 1].depth === 2;

    return (
      <div style={majorOrMinor ? styles.row : styles.patchRow}>
        <span style={styles.numeral}>
          {majorOrMinor ? numeral : ""}
        </span>
        <Link to={slug} activeStyle={styles.link}>
          <span style={styles.linkText}>
            {title}
          </span>
        </Link>
        {hasChildSection &&
          <span
            style={
              expanded[slug] ? styles.expandButtonActive : styles.expandButton
            }
            onClick={this.onToggleSection.bind(this, slug)}
          >
            ...
          </span>}
      </div>
    );
  };

  render() {
    const { styles, style } = this.props;
    return (
      <div style={style}>
        <IndexLink to={"/"} style={styles.sidebarTitleLink}>
          <h4 style={styles.sidebarTitle}>React Express</h4>
        </IndexLink>
        <div style={styles.rowsContainer}>
          {chapters.map(group => {
            return [
              group.map(this.renderRow),
              <div key={"dot-container"} style={styles.dotContainer}>
                <span style={styles.dot} />
              </div>
            ];
          })}
        </div>
      </div>
    );
  }
}
