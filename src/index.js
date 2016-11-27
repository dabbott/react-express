import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { ResponsiveProvider } from 'react-styles-provider'

import './styles/reset.css'
import './styles/main.css'
import Router from './containers/Router'

const calculateResponsiveBreakpoints = ({width, height, isMobile}) => {
  const attributes = []

  if (width > 1280) {
    attributes.push('large')
  } else if (width > 800) {
    attributes.push('medium')
  } else {
    attributes.push('small')
  }

  if (isMobile) {
    attributes.push('mobile')
  } else {
    attributes.push('desktop')
  }

  return attributes.join('-')
}

const render = () => {
  ReactDOM.render(
    <ResponsiveProvider set={calculateResponsiveBreakpoints}>
      <AppContainer>
        <Router />
      </AppContainer>
    </ResponsiveProvider>,
    document.getElementById('root')
  )
}

render()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Router', render)
}
