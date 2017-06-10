import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
React Native provides two animation APIs out of the box: \`Animated\` and \`LayoutAnimation\`. \`Animated\` is used far more frequently, so we'll only cover that here. If you're curious about \`LayoutAnimation\`, you can read more in the [docs](https://facebook.github.io/react-native/docs/animations.html#layoutanimation).

\`Animated\` is a somewhat imperative API, meaning that you'll manually specify when to start and stop animations. This gives you a lot of control, but can get tedious quickly. Consider using [React Native Animatable](react_native_animatable) for a component-based declarative API around \`Animated\`.

If you're planning on building a rich, interactive UI, you'll also need the \`PanResponder\` API for tracking and responding to touch events.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
