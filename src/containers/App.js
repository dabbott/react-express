import React, { Component } from "react";
import { Helmet } from "react-helmet";
import createStyles, { responsive } from "react-styles-provider";

import Sidebar from "./Sidebar";
import NavigatorButton from "./NavigatorButton";
import { HamburgerButton, Disqus } from "../components";
import {
  getSection,
  getNextSection,
  getPreviousSection
} from "../utils/Sections";
import { getTitle } from "../config";

@responsive()
@createStyles({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    minWidth: 0,
    minHeight: 0
  },
  inner: {
    flex: "1 1 auto",
    flexDirection: "row",
    alignItems: "stretch",
    display: "flex",
    minWidth: 0,
    minHeight: 0
  },
  sidebar: {
    flex: "0 0 280px",
    borderRight: "1px solid rgba(220,220,220,0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    minWidth: 0,
    minHeight: 0
  },
  content: {
    flex: "1 1 auto",
    display: "flex",
    position: "relative",
    minWidth: 0,
    minHeight: 0
  },
  menuButton: {
    position: "absolute",
    top: 10,
    left: ({ responsive }, { showSidebar }) =>
      !responsive.match("small|mobile") && showSidebar ? 290 : 10,
    zIndex: 12000
  },
  menu: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    backgroundColor: "white"
  },
  footer: {
    marginTop: 20,
    padding: ({ responsive }) => (responsive.match("mobile") ? 20 : 60),
    backgroundColor: "rgb(250,250,250)"
  },
  navigatorButtonContainer: {
    padding: ({ responsive }) =>
      responsive.match("mobile") ? "10px 0" : "0 60px 40px 60px"
  }
})
export default class App extends Component {
  state = {
    showSidebar: true,
    showMenu: false
  };

  toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

  toggleSidebar = () => this.setState({ showSidebar: !this.state.showSidebar });

  componentWillReceiveProps(nextProps) {
    const { showMenu } = this.state;

    if (
      showMenu &&
      nextProps.location.pathname !== this.props.location.pathname
    ) {
      this.setState({ showMenu: false });
    }
  }

  componentWillUpdate(nextProps) {
    const { location } = nextProps;
    const { pathname } = location;

    const nextSection = getNextSection(pathname);

    // Pre-load the next section
    if (nextSection) {
      const { componentName } = nextSection;

      System.import(`../pages/${componentName}`);
    }
  }

  renderMenuButton(styles) {
    const { responsive } = this.props;

    return (
      <HamburgerButton
        style={styles.menuButton}
        onPress={
          responsive.match("small|mobile")
            ? this.toggleMenu
            : this.toggleSidebar
        }
      />
    );
  }

  render() {
    const { getStyles, responsive, children, location } = this.props;
    const { showSidebar, showMenu } = this.state;
    const { pathname } = location;

    const styles = getStyles(this.state);
    const section = getSection(pathname);
    const url = `http://www.react.express/${section ? section.slug : ""}`;
    const title = section && (section.fullTitle || section.title);

    const cloned = React.Children.map(children, child => {
      return React.cloneElement(child, {
        title,
        navigatorButton: (
          <NavigatorButton
            nextSection={getNextSection(pathname)}
            previousSection={getPreviousSection(pathname)}
          />
        ),
        footer:
          pathname !== "/" &&
            <div>
              <div style={styles.navigatorButtonContainer}>
                <NavigatorButton
                  vertical={
                    responsive.match("small") && responsive.match("mobile")
                  }
                  nextSection={getNextSection(pathname)}
                  previousSection={getPreviousSection(pathname)}
                />
              </div>
              <div style={styles.footer}>
                <Disqus
                  title={title}
                  identifier={pathname}
                  url={window.location.href}
                />
              </div>
            </div>
      });
    });

    return (
      <div style={styles.container}>
        <Helmet>
          <title>
            {getTitle(title)}
          </title>
          <meta property="og:title" content={getTitle(title)} />
          <meta property="og:url" content={url} />
        </Helmet>
        <div style={styles.inner}>
          {this.renderMenuButton(styles)}
          {!responsive.match("small|mobile") &&
            showSidebar &&
            <Sidebar style={styles.sidebar} currentSection={section} />}
          <div style={styles.content}>
            {cloned}
          </div>
        </div>
        {responsive.match("small|mobile") &&
          showMenu &&
          <Sidebar
            style={styles.menu}
            currentSection={section}
            centered={true}
          />}
      </div>
    );
  }
}
