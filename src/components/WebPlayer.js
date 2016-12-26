import React, { Component } from 'react'
import createStyles, { responsive } from 'react-styles-provider'
import ReactNativeWebPlayer from 'react-native-web-player'

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
    height: 700,
    width: 260,
    scale: 0.75,
    showTranspiler: false,
    fullscreen: true,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const {
      styles,
      showTranspiler,
      responsive,

      // Passthrough
      code,
      files,
      entry,
      title,
      height,
      width,
      scale,
      fullscreen,
      transpilerTitle,
      vendorComponents,
    } = this.props

    const params = {
      code,
      files,
      entry,
      title,
      width,
      scale,
      fullscreen,
      transpilerTitle,
      vendorComponents,
      styles: playerStyles,
    }

    if (responsive.match('mobile')) {
      params.panes = ['editor']
    } else {
      if (showTranspiler) {
        params.panes = ['editor', 'transpiler']
      } else {
        params.panes = ['editor', 'player']
      }
    }

    return (
      <div style={styles.container}>
        <ReactNativeWebPlayer
          style={{...styles.player, height}}
          {...params}
        />
      </div>
    )
  }
}
