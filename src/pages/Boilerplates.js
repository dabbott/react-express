import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { GithubRepositoryLink } from "../components";

const content = markdown(markdownOptions)`
Setting up a new React Native project can be very time-consuming. Setting up a project typically takes 2-3 days, given that most projects need <i>at minimum</i>: Redux, routing/navigation, data persistence, network calls, and tests. This doesn't include other more use-case-specific libraries like: Microsoft CodePush for updating the JavaScript bundle over the air (without submitting an update through the App Store), fastlane for automated deployment, redux sagas for complex state management, or internationalization.

To save a lot of time, effort, and headaches, it's often helpful to start with a boilerplate React Native project. Boilerplates contain a specific set of libraries for common needs such as network calls, which work out of the box and don't conflict with the other libraries included in the project. Boilerplates are typically very opinionated about the libraries they include, making most choices for you, while offering little customization.

At the moment, the three boilerplates worth considering are:
- ${(
  <GithubRepositoryLink user={"infinitered"} repo={"ignite"} title={"Ignite"} />
)}
- ${(
  <GithubRepositoryLink
    user={"futurice"}
    repo={"pepperoni-app-kit"}
    title={"Pepperoni App Kit"}
  />
)}
- ${(
  <GithubRepositoryLink
    user={"bartonhammond"}
    repo={"snowflake"}
    title={"Snowflake"}
  />
)}

${(
  <table className={"table"}>
    <thead>
      <tr>
        <th style={{ width: 145 }}>Using a boilerplate</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pros</td>
        <td>
          <ul>
            <li>
              Boilerplates let you skip the project setup and get started with
              business logic and your app's UI immediately. This can be
              especially valuable on a team with many engineers, who would
              otherwise be blocked until the project setup is complete.<br />
              <br />
            </li>
          </ul>
          <ul>
            <li>
              Boilerplates correctly configure many complex technologies, making
              sure they work together, and provide a good developer experience
              (many libraries need custom configuration to work with hot
              reloading, etc).<br /><br />
            </li>
          </ul>
          <ul>
            <li>
              It is typically faster and less error-prone to rip out code that
              isn't needed, rather than than building up from scratch.<br />
              <br />
            </li>
          </ul>
          <ul>
            <li>
              Boilerplates often have a lot of people using and contributing,
              who can help answer questions when you get stuck. It's likely that
              these people have the exact same project setup as you, and will be
              able to offer better suggestions than those who have never seen
              your project setup.<br /><br />
            </li>
          </ul>
          <ul>
            <li>
              When you want to update React Native (which can be difficult and
              time consuming if you have custom native modules), you can see how
              the boilerplate accomplished the update, and do the same in your
              project.<br /><br />
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Cons</td>
        <td>
          <ul>
            <li>
              A boilerplate is unlikely to make the same technical decisions
              that you would about your app, given that: you know your use case
              best, and you may have experience with certain libraries that you
              want to leverage. You'll never find a perfect boilerplate.<br />
              <br />
            </li>
          </ul>
          <ul>
            <li>
              Boilerplates attempt to work for a broad set of use cases. They
              will almost certainly contain libraries and starter files that you
              won't need, and that you'll want to delete before you start
              working. You may also want to add or swap libraries.<br /><br />
            </li>
          </ul>
          <ul>
            <li>
              Boilerplates tend to be large, and may contain a lot of unfamiliar
              code. Part of the unfamiliar code may even be unique to the
              boilerplate, so nobody on your team will be familiar with it
              either. You'll have to start by learning your boilerplate inside
              and out.<br /><br />
            </li>
          </ul>
          <ul>
            <li>
              When you want to update React Native, you'll have to make sure all
              of your project's dependencies work with the new version. Since
              boilerplates tend to include a lot of dependencies, you may have a
              lot of work to do before your app runs successfully again.<br />
              <br />
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
