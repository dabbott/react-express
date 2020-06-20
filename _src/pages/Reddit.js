import React, { Component } from "react";
import { Link } from "react-router";

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

export default class Reddit extends Component {
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
              This exercise will be a basic Reddit client. This exercise will
              include some more complex elements such as <code>fetch</code>,{" "}
              <code>AsyncStorage</code>, and authentication.
            </div>
            <div style={styles.h4}>Project Setup</div>
            <ol>
              <li>
                Download the basic project template{" "}
                <a
                  href={
                    "https://github.com/decosoftware/RedditClient/archive/template.zip"
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
            <div style={styles.h4}> Completed </div>
            <div style={styles.p}>
              You can view the completed project on github{" "}
              <a href={"https://github.com/decosoftware/RedditClient/tree/go"}>
                here
              </a>.
            </div>
            <div style={styles.h4}> Sections </div>
            <ul>
              <li style={styles.li}>
                {" "}<Link to={"reddit_1"}> Step 1 - Setup Router </Link>{" "}
              </li>
              <li style={styles.li}>
                {" "}<Link to={"reddit_2"}> Step 2 - Reddit OAuth </Link>{" "}
              </li>
              <li style={styles.li}>
                {" "}
                <Link to={"reddit_3"}>
                  {" "}Step 3 - Persisting Token with AsyncStorage{" "}
                </Link>{" "}
              </li>
              <li style={styles.li}>
                {" "}
                <Link to={"reddit_4"}>
                  {" "}Step 4 - Fetch Reddit Posts{" "}
                </Link>{" "}
              </li>
              <li style={styles.li}>
                {" "}
                <Link to={"reddit_5"}>
                  {" "}Step 5 - Display Reddit Posts{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div style={{ border: "1px solid black", height: 528 }}>
            <video autoPlay loop width={280} src={"RedditDemo.mp4"} />
          </div>
        </div>
      </Page>
    );
  }
}
