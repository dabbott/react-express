import React, { Component } from 'react'

const createUrlParams = (params) => {
  return Object.keys(params).map(key => {
    return `${key}=${encodeURIComponent(params[key])}`
  }).join('&')
}

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

const WEB_PLAYER_VERSION = '1.5.1'

const playerStyles = {
  tab: {
    backgroundColor: 'rgb(250,250,250)',
  },
  tabText: {
    color: '#AAA',
  },
  tabTextActive: {
    color: '#000',
  },
}

export default class WebPlayer extends Component {

  static defaultProps = {
    height: 700,
    width: 260,
    scale: 0.75,
    code: '',
    files: [],
    vendorComponents: [],
  }

  render() {
    const {code, files, entry, height, width, scale, vendorComponents} = this.props

    const params = {
      width,
      scale,
      fullscreen: true,
      styles: JSON.stringify(playerStyles),
    }

    if (files.length > 0) {
      params.files = JSON.stringify(files)
    } else {
      params.code = code
    }

    if (vendorComponents.length) {
      params.vendorComponents = JSON.stringify(vendorComponents)
    }

    if (entry) {
      params.entry = entry
    }

    const hash = '#' + createUrlParams(params)

    return (
      <div style={styles.container}>
        <iframe
          style={styles.player}
          height={height}
          frameBorder={0}
          allowFullScreen
          src={`//cdn.rawgit.com/dabbott/react-native-web-player/gh-v${WEB_PLAYER_VERSION}/index.html${hash}`}
        />
      </div>
    )
  }
}
