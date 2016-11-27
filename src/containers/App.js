import React, { Component } from 'react'
import Helmet from 'react-helmet'
import createStyles, { responsive } from 'react-styles-provider'

import Sidebar from './Sidebar'
import NavigatorButton from './NavigatorButton'
import { HamburgerButton } from '../components'
import { getNextSection, getPreviousSection } from '../utils/Sections'
import * as config from '../config'

@responsive()
@createStyles({
  container: {
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
  },
  inner: {
    flex: '1 1 auto',
    flexDirection: 'row',
    alignItems: 'stretch',
    display: 'flex',
    minWidth: 0,
    minHeight: 0,
  },
  sidebar: {
    flex: '0 0 280px',
    borderRight: '1px solid rgba(220,220,220,0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minWidth: 0,
    minHeight: 0,
  },
  content: {
    flex: '1 1 auto',
    display: 'flex',
    position: 'relative',
    minWidth: 0,
    minHeight: 0,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: ({responsive}, {showSidebar}) =>
      !responsive.match('small|mobile') && showSidebar ? 290 : 10,
    zIndex: 12000,
  },
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    backgroundColor: 'white',
  },
})
export default class App extends Component {

  state = {
    showSidebar: true,
    showMenu: false,
  }

  toggleMenu = () => this.setState({showMenu: !this.state.showMenu})

  toggleSidebar = () => this.setState({showSidebar: !this.state.showSidebar})

  componentWillReceiveProps(nextProps) {
    const {showMenu} = this.state

    if (
      showMenu &&
      nextProps.location.pathname !== this.props.location.pathname
    ) {
      this.setState({showMenu: false})
    }
  }

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

  renderSidebar(styles) {
    return (
      <Sidebar style={styles.sidebar} />
    )
  }

  renderMenuButton(styles) {
    const {responsive} = this.props

    return (
      <HamburgerButton
        style={styles.menuButton}
        onPress={responsive.match('small|mobile') ? this.toggleMenu : this.toggleSidebar}
      />
    )
  }

  render() {
    const {getStyles, responsive, children, location} = this.props
    const {showSidebar, showMenu} = this.state
    const {pathname} = location

    const styles = getStyles(this.state)

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
      <div style={styles.container}>
        <Helmet
          defaultTitle={config.title}
          titleTemplate={config.titleTemplate}
          meta={config.meta}
        />
        <div style={styles.inner}>
          {this.renderMenuButton(styles)}
          {!responsive.match('small|mobile') && showSidebar && this.renderSidebar(styles)}
          {responsive.match('small|mobile') && showMenu && (
            <Sidebar
              style={styles.menu}
              centered={true}
            />
          )}
          <div style={styles.content}>
            {cloned}
          </div>
        </div>
      </div>
    )
  }
}
