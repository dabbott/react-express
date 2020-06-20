import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { PageHeader } from "../components";

const content = markdown(markdownOptions)`

Our first exercise will be a simple Todo List. If you get stuck at any point, you can look to the examples in this guide, as there will be a lot of overlap in code.

Let's build the app on the right. We'll break it down into smaller sections and build it piece-by-piece. Feel free to reference previous sections.

## Project Setup

1. Download the basic project template [here](https://raw.githubusercontent.com/gabergg/ReactNativeTodoList/starting-point/boilerplate/TodoList.zip)
2. Unzip the project directory
3. After downloading, \`npm install\` in the project directory
4. Run \`react-native run-ios\` to build and launch the app

## Completed

You can view the completed project on github [here](https://github.com/gabergg/ReactNativeTodoList).

## Sections

- [Step 1 - App setup](todo_list_1)
- [Step 2 - Input and ADD_ITEM](todo_list_2)
- [Step 3 - List and Checkbox](todo_list_3)
- [Step 4 - Remove completed items and styling](todo_list_4)
`;

const containerStyle = {
  display: "flex",
  flexDirection: "row"
};

const contentStyle = {
  paddingRight: "30px",
  marginTop: "-15px"
};

export default props =>
  <Page {...props}>
    <div style={containerStyle}>
      <div style={contentStyle}>
        <PageHeader
          title={props.title}
          author={"Gabe G'Sell"}
          authorURL={"http://gabegsell.com/"}
        />
        {content}
      </div>
      <div>
        <img
          style={{ border: "1px solid black" }}
          width={280}
          src={"todo-screenshot.png"}
        />
      </div>
    </div>
  </Page>;
