import React, { Component } from "react";
import { Link } from "react-router";

import Page from "./Page";
import styles from "../styles";
import { PageHeader } from "../components";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

export default class Uber extends Component {
  render() {
    return (
      <Page {...this.props}>
        <div style={containerStyle}>
          <div style={{ paddingRight: "30px" }}>
            <PageHeader
              title={this.props.title}
              author={"@devinaabbott"}
              authorURL={"https://twitter.com/devinaabbott"}
            />
            <div style={styles.p}>
              We'll now build the main UI for the Uber app. This is an{" "}
              <b>advanced</b> exercise, covering:
            </div>
            <ul>
              <li>
                Animation using <code>react-native-animatable</code> (some of
                these are really tricky!)
              </li>
              <li>Layout and absolute positioning</li>
              <li>Using the <code>react-native-maps</code> native module</li>
              <li>Geolocation API</li>
              <li>ListView</li>
            </ul>
            <div style={styles.p}>
              The project template includes all the assets you'll need to make
              the app on the right. The exact animations in the Uber app are
              very nuanced and change frequently, so don't worry about getting
              it <i>exactly</i> right. When in doubt, open the Uber app and try
              to observer how the animations work so you can piece them back
              together.
            </div>
            <div style={styles.h4}>Project Setup</div>
            <ol>
              <li>
                Download the basic project template{" "}
                <a
                  href={
                    "https://github.com/dabbott/UberExercise/raw/starting-point/boilerplate/UberExercise.zip"
                  }
                >
                  here
                </a>
              </li>
              <li>Unzip the project directory</li>
              <li>
                After downloading, <code>npm install</code> in the project
                directory
              </li>
              <li>
                Run <code>react-native run-ios</code> to build and launch the
                app
              </li>
            </ol>
            <div style={styles.h4}>Completed</div>
            <div style={styles.p}>
              You can view the completed project on github{" "}
              <a href={"https://github.com/dabbott/UberExercise"}>here</a>.
            </div>
            <div style={styles.h4}>Sections</div>
            <ul>
              <li style={styles.li}>
                <Link to={"uber_1"}> Step 1 - Search Header</Link>
              </li>
              <li style={styles.li}>
                <Link to={"uber_2"}> Step 2 - Results List</Link>
              </li>
              <li style={styles.li}>
                <Link to={"uber_3"}> Step 3 - Map & Geolocation</Link>
              </li>
              <li style={styles.li}>
                <Link to={"uber_4"}> Step 4 - UI Polish</Link>
              </li>
            </ul>
          </div>
          <div>
            <img width={280} src={"uber-animation-small.gif"} />
          </div>
        </div>
      </Page>
    );
  }
}
