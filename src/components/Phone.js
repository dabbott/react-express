import React, { Component } from 'react';

const dimensions = {
  deviceImageWidth: 870,
  deviceImageHeight: 1738,
  screenWidth: 750,
  screenHeight: 1334,
}

const screenStyle = {
  backgroundColor: 'white',
  width: dimensions.screenWidth / 2,
  height: dimensions.screenHeight / 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  position: 'relative',
  transform: `scale3d(${2}, ${2}, 1)`,
  overflow: 'hidden',
}

export default class Phone extends Component {
  static defaultProps = {
    height: 600,
  }

  getScreenNode() {
    return this.refs.screen
  }

  render() {
    const {height} = this.props
    const scale = height / dimensions.deviceImageHeight
    const width = scale * dimensions.deviceImageWidth

    const containerStyle = {
      width,
      height,
      margin: '0 auto',
    }

    const phoneStyle = {
      width: dimensions.deviceImageWidth,
      height: dimensions.deviceImageHeight,
      backgroundImage: `url(https://cdn.rawgit.com/koenbok/Framer/master/extras/DeviceResources/iphone-6-silver.png)`,
      transform: `scale3d(${scale}, ${scale}, 1)`,
      transformOrigin: '0 0 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <div style={containerStyle}>
        <div style={phoneStyle}>
          <div ref={'screen'} style={screenStyle}>
          </div>
        </div>
      </div>
    )
  }
}
