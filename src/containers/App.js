import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Sidebar from './Sidebar'
import NavigatorButton from './NavigatorButton'
import { getNextSection, getPreviousSection } from '../utils/Sections'
import * as config from '../config'

const innerStyle = {
  flex: '1 1 auto',
  flexDirection: 'row',
  alignItems: 'stretch',
  display: 'flex',
  minWidth: 0,
  minHeight: 0,
}

const sidebarStyle = {
  flex: '0 0 280px',
  borderRight: '1px solid rgba(220,220,220,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: 0,
  minHeight: 0,
}

const contentStyle = {
  flex: '1 1 auto',
  display: 'flex',
  position: 'relative',
  // Hack to fix flexbox scrolling in FF
  // position: 'absolute',
  // height: '100%',
  minWidth: 0,
  minHeight: 0,
}

const style = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: 0,
  minHeight: 0,
}

export default class App extends Component {

  componentWillUpdate(nextProps) {
    const {location} = nextProps
    const {pathname} = location

    const nextSection = getNextSection(pathname)

    // Pre-load the next section
    if (nextSection) {
      const {componentName} = nextSection

      System.import(`../pages/${componentName}`)
    }
  }

  render() {
    const {children, location} = this.props
    const {pathname} = location

    const cloned = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        navigatorButton: (
          <NavigatorButton
            nextSection={getNextSection(pathname)}
            previousSection={getPreviousSection(pathname)}
          />
        ),
      })
    })

    return (
      <div style={style}>
        <Helmet
          defaultTitle={config.title}
          titleTemplate={config.titleTemplate}
          meta={config.meta}
        />
        <div style={innerStyle}>
          <Sidebar style={sidebarStyle} />
          <div style={contentStyle}>
            {cloned}
          </div>
        </div>
      </div>
    )
  }
}
