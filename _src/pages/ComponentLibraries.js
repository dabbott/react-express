import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { GithubRepositoryLink } from "../components";

const content = markdown(markdownOptions)`
Beyond the React Native core components, there are many open source component libraries. Libraries vary in size and shape, from individual components that bridge native platform functionality (e.g. maps, video, etc) to large component collections (for web folks, think Bootstrap).

If you feel you've learned enough about UI for now, feel free to skip ahead to [data management](data) and come back to these later.

# Component Collections

When beginning a new app, it's worth considering using a component collection. These provide tens or potentially hundreds of consistently designed, cross-platform components out-of-the-box to accelerate your development process.

Component collections speed up development by letting you focus on the architecture and business logic of the app, without focusing on the nuances of layout and styling in React Native. If you aren't working with a dedicated designer or design team, these can be a great way to build an app with a highly polished look and feel.

However, component collections aren't for every app: they can add a lot of code and complexity, and you may not be able to customize them as much as you like. If you're working closely with a designer or design team, it's likely that starting from scratch will give you the flexibility you need to make the app look just right.

Currently, the three largest component collections are:

- ${<GithubRepositoryLink user={"shoutem"} repo={"ui"} title={"Shoutem UI"} />}
- ${(
  <GithubRepositoryLink
    user={"react-native-community"}
    repo={"react-native-elements"}
    title={"React Native Elements"}
  />
)}
- ${(
  <GithubRepositoryLink
    user={"GeekyAnts"}
    repo={"NativeBase"}
    title={"NativeBase"}
  />
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
