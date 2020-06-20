import React, { Component } from "react";

import Author from "./Author";
import styles from "../styles";

export default class PageHeader extends Component {
  render() {
    const { title, author, authorURL } = this.props;

    return (
      <div style={styles.pageHeader}>
        {title}
        <Author url={authorURL}>
          {author}
        </Author>
      </div>
    );
  }
}
