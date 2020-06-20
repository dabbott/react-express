import React, { Component } from "react";

import Page from "./Page";
import styles from "../styles";
import { PageHeader } from "../components";

const containerStyle = {
  display: "flex",
  flexDirection: "row"
};

const contentStyle = {
  paddingRight: "30px",
  marginTop: "-15px"
};

export default class Reddit1 extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <PageHeader
              title={this.props.title}
              author={"@AnonSequitur"}
              authorURL={"https://twitter.com/AnonSequitur"}
            />
            <div style={styles.p}>
              Navigation is an important piece of any mobile app. As of now,
              there are many navigator libraries for React Native and no single
              library is THE standard.
              In this example, we'll be using the{" "}
              <a href="https://github.com/aksonov/react-native-router-flux">
                react-native-router-flux
              </a>{" "}
              node module.
            </div>
            <div style={styles.h4}> Tasks </div>
            <ul>
              <li style={styles.li}>
                Complete the Router.js file and implement AppRouter component.
                The component should render a top-level <code>Router</code>
              </li>
              <li style={styles.li}>
                Add <code>Scenes</code> to the Router.js file
                <ul>
                  <li style={styles.li}>Add tabs scene</li>
                  <li style={styles.li}>
                    Add "posts" tab with component <code>Posts.js</code>
                  </li>
                  <li style={styles.li}>
                    Add "random" tab with component <code>Random.js</code>
                  </li>
                  <li style={styles.li}>
                    Add "login" scene with component <code>Login.js</code>, make
                    this scene the staring point of your application.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Page>
    );
  }
}
