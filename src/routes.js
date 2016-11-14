import React from 'react'
import { IndexRoute, Route } from 'react-router'
import { App, NotFound, Sandbox } from 'containers'

import Introduction from 'containers/Pages/Introduction'

import GettingStarted from 'containers/Pages/GettingStarted'
import Babel from 'containers/Pages/Babel'
import ES6 from 'containers/Pages/ES6'
import JSX from 'containers/Pages/JSX'

import ComponentPage from 'containers/Pages/Component'
import ComponentAPI from 'containers/Pages/ComponentAPI'
import LifecycleAPI from 'containers/Pages/LifecycleAPI'

import CoreComponents from 'containers/Pages/CoreComponents'
import Flexbox from 'containers/Pages/Flexbox'
import View from 'containers/Pages/View'
import Text from 'containers/Pages/Text'
import Image from 'containers/Pages/Image'
import ScrollView from 'containers/Pages/ScrollView'
import ListView from 'containers/Pages/ListView'

import Data from 'containers/Pages/Data'
import ComponentState from 'containers/Pages/ComponentState'
import Redux from 'containers/Pages/Redux'
import ReactRedux from 'containers/Pages/ReactRedux'
import Realm from 'containers/Pages/Realm'

import Persistence from 'containers/Pages/Persistence'

import Boilerplates from 'containers/Pages/Boilerplates'

export default () => {
  return (
    <Route path={"/"}>

      <Route path={"sandbox/:sandboxId"} component={Sandbox} />

      <Route component={App}>
        { /* Home (main) route */ }
        <IndexRoute component={Introduction} />

        { /* Routes */ }
        <Route path={"intro"} component={Introduction} />
        <Route path={"start"} component={GettingStarted} />
        <Route path={"babel"} component={Babel} />
        <Route path={"components"} component={ComponentPage} />
        <Route path={"component_api"} component={ComponentAPI} />
        <Route path={"core_components"} component={CoreComponents} />
        <Route path={"lifecycle_api"} component={LifecycleAPI} />
        <Route path={"es6"} component={ES6} />
        <Route path={"flexbox"} component={Flexbox} />
        <Route path={"jsx"} component={JSX} />
        <Route path={"view"} component={View} />
        <Route path={"text"} component={Text} />
        <Route path={"image"} component={Image} />
        <Route path={"scrollview"} component={ScrollView} />
        <Route path={"listview"} component={ListView} />
        <Route path={"data"} component={Data} />
        <Route path={"data_component_state"} component={ComponentState} />
        <Route path={"redux"} component={Redux} />
        <Route path={"react_redux"} component={ReactRedux} />
        <Route path={"realm"} component={Realm} />
        <Route path={"persistence"} component={Persistence} />
        <Route path={"boilerplates"} component={Boilerplates} />

        { /* Catch all route */ }
        <Route path={"*"} component={NotFound} status={404} />
      </Route>
    </Route>
  )
}
