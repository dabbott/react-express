import React, { Component } from 'react'
import { Router, IndexRoute, Route, browserHistory, applyRouterMiddleware } from 'react-router'
import useScroll from 'react-router-scroll/lib/useScroll'

import * as Analytics from '../utils/Analytics'
import sections from '../utils/Sections'
import createProxyComponent from '../pages/createProxyComponent'

import App from './App'
import Introduction from '../pages/Introduction'

const routes = sections.map(section => {
  const {slug, componentName} = section
  const component = createProxyComponent(componentName)

  return (
    <Route
      key={slug}
      path={slug}
      component={component}
    />
  )
})

export default class AppRouter extends Component {
  render() {
    return (
      <Router
        history={browserHistory}
        onUpdate={Analytics.pageView}
        render={applyRouterMiddleware(useScroll())}
      >
        <Route path="/" component={App}>
          <IndexRoute component={Introduction} />
          <Route path={"intro"} component={Introduction} />
          {routes}
          {/* <Route path={"*"} component={NotFound} status={404} /> */}
        </Route>
      </Router>
    )
  }
}
