import React, { Component } from "react";

import { PageHeader } from "../components";
import Page from "./Page";

export default class DefaultPage extends Component {
  render() {
    const { title, footer, children } = this.props;

    return (
      <Page title={title} footer={footer}>
        <PageHeader
          title={title}
          author={"@dvnabbott"}
          authorURL={"https://twitter.com/dvnabbott"}
        />
        {children}
      </Page>
    );
  }
}
