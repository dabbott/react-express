import React, { Component } from "react";

import DefaultPage from "./DefaultPage";
import styles from "../styles";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

export default class Uber extends Component {
  render() {
    return (
      <DefaultPage {...this.props}>
        <div style={containerStyle}>
          <div style={{ paddingRight: "30px" }}>
            <div style={styles.p}>
              Now we'll add a <code>MapView</code> from{" "}
              <code>react-native-maps</code>. This is a native module, so make
              sure to follow the instructions carefully! Here's the{" "}
              <a href={"https://github.com/airbnb/react-native-maps"}>
                library
              </a>. We'll also draw two <code>MapView.Circle</code>s at the
              user's current location: a large lighter circle, and a small
              darker circle.
            </div>
            <div style={styles.p}>
              You can get the user's current location using the{" "}
              <a
                href={
                  "https://facebook.github.io/react-native/docs/geolocation.html"
                }
              >
                geolocation
              </a>{" "}
              API.
            </div>
          </div>
          <div>
            <img src={"uber-step-mapview.png"} width={280} />
          </div>
        </div>
      </DefaultPage>
    );
  }
}
