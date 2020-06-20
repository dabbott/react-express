import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { PageHeader } from "../components";

const content = markdown(markdownOptions)`
ES2015 is the set of Javascript features as of 2015. There have already been many other features proposed for future versions of Javascript, including ES2016 (ES7) and ES2017 (ES8). With Babel, we can use many of these features today.

Some of these features have already become standards in modern Javascript development. Let's walk through a few of the more popular and useful features.
`;

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={"http://gabegsell.com/"}
    />
    {content}
  </Page>;
