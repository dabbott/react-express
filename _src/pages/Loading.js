import React, { Component } from "react";
import Page from "./Page";
import styles from "../styles";

export default class Loading extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well} />
      </Page>
    );
  }
}
