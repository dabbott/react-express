import React from 'react'
import { IndexRoute, Route } from 'react-router'
import {
  App,
  NotFound,
  Sandbox,
} from 'containers'

import Babel from 'containers/Pages/Babel'
import ES6 from 'containers/Pages/ES6'
import View from 'containers/Pages/View'
import ComponentPage from 'containers/Pages/Component'
import ComponentAPI from 'containers/Pages/ComponentAPI'
import LifecycleAPI from 'containers/Pages/LifecycleAPI'
import Introduction from 'containers/Pages/Introduction'
import GettingStarted from 'containers/Pages/GettingStarted'
import JSX from 'containers/Pages/JSX'
import CoreComponents from 'containers/Pages/CoreComponents'
import Flexbox from 'containers/Pages/Flexbox'
import Text from 'containers/Pages/Text'

export default () => {
  return (
    <Route path="/">

      <Route path="sandbox/:sandboxId" component={Sandbox}/>

      <Route component={App}>
        { /* Home (main) route */ }
        <IndexRoute component={Introduction}/>

        { /* Routes */ }
        <Route path="intro" component={Introduction}/>
        <Route path="babel" component={Babel}/>
        <Route path="components" component={ComponentPage}/>
        <Route path="component_api" component={ComponentAPI}/>
        <Route path="core_components" component={CoreComponents}/>
        <Route path="lifecycle_api" component={LifecycleAPI}/>
        <Route path="es6" component={ES6}/>
        <Route path="flexbox" component={Flexbox}/>
        <Route path="jsx" component={JSX}/>
        <Route path="view" component={View}/>
        <Route path="text" component={Text}/>
        <Route path="start" component={GettingStarted}/>

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Route>
  )
}
