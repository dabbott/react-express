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
              Polish up the UI by adding the navigation icon at the top left,
              which toggles between hamburger icon and arrow-left icon.
            </div>
            <div style={styles.p}>
              Fill out the <code>LocationButton</code> and{" "}
              <code>LocationButtonGroup</code> (the circular bubbles with icons
              and text beneath), and stretch beneath these the image asset
              included for the gradient background.
            </div>
            <div style={styles.p}>
              After that, you're all done!
            </div>
            <div style={styles.h4}>Compare your work!</div>
            <div style={styles.p}>
              You can view the completed project on github{" "}
              <a href={"https://github.com/dabbott/UberExercise"}>here</a>.
            </div>
          </div>
          <div>
            <img src={"uber-step-location-buttons.png"} width={280} />
          </div>
        </div>
      </DefaultPage>
    );
  }
}
