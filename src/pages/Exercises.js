import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
Let's apply these concepts to some exercises.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
