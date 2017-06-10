import React, { Component } from "react";

import StarCount from "./StarCount";

export default class GithubRepositoryLink extends Component {
  render() {
    const { user, repo, title, stars } = this.props;

    return (
      <span>
        <a href={`https://github.com/${user}/${repo}`}>
          {title}
        </a>
        {stars && " "}
        {stars && <StarCount user={user} repo={repo} />}
      </span>
    );
  }
}
