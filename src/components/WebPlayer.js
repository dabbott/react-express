import React, { Component } from 'react'
import createStyles, { responsive } from 'react-styles-provider'

const createUrlParams = (params) => {
  return Object.keys(params).map(key => {
    return `${key}=${encodeURIComponent(params[key])}`
  }).join('&')
}

const WEB_PLAYER_VERSION = '1.6.1'

const playerStyles = {
  tab: {
    backgroundColor: 'rgb(250,250,250)',
  },
  header: {
    backgroundColor: 'rgb(250,250,250)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px',
    zIndex: 10,
  },
  headerText: {
    color: '#AAA',
    fontWeight: 'normal',
  },
  transpilerHeader: {
    backgroundColor: 'rgb(240,240,240)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px',
    zIndex: 10,
  },
  transpilerHeaderText: {
    color: '#888',
    fontWeight: 'normal',
  },
  tabText: {
    color: '#AAA',
  },
  tabTextActive: {
    color: '#000',
  },
}

@responsive()
@createStyles({
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
})
export default class WebPlayer extends Component {

  static defaultProps = {
    title: null,
    height: 700,
    width: 260,
    scale: 0.75,
    code: '',
    files: [],
    vendorComponents: [],
    showTranspiler: false,
    transpilerTitle: '',
    fullscreen: true,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const {
      styles,
      code,
      files,
      entry,
      title,
      height,
      width,
      scale,
      fullscreen,
      showTranspiler,
      transpilerTitle,
      vendorComponents,
      responsive,
    } = this.props

    const params = {
      width,
      scale,
      fullscreen,
      styles: JSON.stringify(playerStyles),
    }

    if (title) {
      params.title = title
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

    if (responsive.match('mobile')) {
      params.panes = JSON.stringify(['editor'])
    } else {
      if (showTranspiler) {
        params.panes = JSON.stringify(['editor', 'transpiler'])
      } else {
        params.panes = JSON.stringify(['editor', 'player'])
      }
    }

    if (transpilerTitle) {
      params.transpilerTitle = transpilerTitle
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
