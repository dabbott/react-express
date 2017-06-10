import React, { Component } from "react";

const addCommas = n => {
  if (n < 1000) return n.toString();

  return Math.floor(n / 1000).toString() + "," + n % 1000;
};

const cache = {};

export default class StarCount extends Component {
  state = {
    count: null
  };

  componentWillMount() {
    const { user, repo } = this.props;
    const cacheKey = `${user}/${repo}`;

    if (cache[cacheKey]) {
      this.setState({ count: cache[cacheKey] });
      return;
    }

    // Fetch doesn't exist in older browsers
    try {
      fetch(`https://api.github.com/repos/${user}/${repo}`)
        .then(response => response.json())
        .then(json => json.stargazers_count)
        .then(count => {
          cache[cacheKey] = count;
          this.setState({ count });
        });
    } catch (e) {
      // Do nothing
    }
  }

  render() {
    const { count } = this.state;

    if (!count) return null;

    return <span>- {addCommas(count)} stars</span>;
  }
}
