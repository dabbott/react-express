import React, { Component } from 'react'

const styles = {
  container: {
    display: 'flex',
    marginBottom: 15,
  },
  player: {
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0,
    marginRight: -10,
  },
}

const WEB_PLAYER_VERSION = '1.2.6'

export default class WebPlayer extends Component {

  static defaultProps = {
    code: '',
    height: 700,
  }

  render() {
    const {code, height} = this.props

    const hash = `#width=260&scale=0.75&code=${encodeURIComponent(code)}`

    return (
      <div style={styles.container}>
        <iframe
          style={styles.player}
          height={height}
          frameBorder={0}
          src={`//cdn.rawgit.com/dabbott/react-native-web-player/gh-v${WEB_PLAYER_VERSION}/index.html${hash}`}
        />
      </div>
    )
  }
}
