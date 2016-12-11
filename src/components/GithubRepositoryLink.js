import React, { Component, PropTypes } from 'react'

import StarCount from './StarCount'

export default class GithubRepositoryLink extends Component {
  render() {
    const {user, repo, title} = this.props

    return (
      <span>
        <a href={`https://github.com/${user}/${repo}`}>
          {title}
        </a>
        {' '}
        <StarCount
          user={user}
          repo={repo}
        />
      </span>
    )
  }
}
