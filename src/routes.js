import React from 'react'
import { IndexRoute, Route } from 'react-router'
import { App, NotFound, Sandbox } from 'containers'

import Introduction from 'containers/Pages/Introduction'

import GettingStarted from 'containers/Pages/GettingStarted'
import Babel from 'containers/Pages/Babel'
import ES6 from 'containers/Pages/ES6'
import ES6Continued from 'containers/Pages/ES6Continued'
import ES7AndBeyond from 'containers/Pages/ES7AndBeyond'
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
import AsyncStorage from 'containers/Pages/AsyncStorage'
import ReduxPersist from 'containers/Pages/ReduxPersist'

import Networking from 'containers/Pages/Networking'
import NetworkingRedux from 'containers/Pages/NetworkingRedux'

import Animation from 'containers/Pages/Animation'
import Animated from 'containers/Pages/Animated'
import ReactNativeAnimatable from 'containers/Pages/ReactNativeAnimatable'
import Gestures from 'containers/Pages/Gestures'

import Exercises from 'containers/Pages/Exercises'

import TodoList from 'containers/Pages/TodoList'
import TodoList1 from 'containers/Pages/TodoList1'
import TodoList2 from 'containers/Pages/TodoList2'
import TodoList3 from 'containers/Pages/TodoList3'
import TodoList4 from 'containers/Pages/TodoList4'

import Reddit from 'containers/Pages/Reddit'
import Reddit1 from 'containers/Pages/Reddit1'
import Reddit2 from 'containers/Pages/Reddit2'
import Reddit3 from 'containers/Pages/Reddit3'
import Reddit4 from 'containers/Pages/Reddit4'
import Reddit5 from 'containers/Pages/Reddit5'

import Uber from 'containers/Pages/Uber'
import Uber1 from 'containers/Pages/Uber1'
import Uber2 from 'containers/Pages/Uber2'
import Uber3 from 'containers/Pages/Uber3'
import Uber4 from 'containers/Pages/Uber4'

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
        <Route path={"es6_continued"} component={ES6Continued} />
        <Route path={"es7_and_beyond"} component={ES7AndBeyond} />
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
        <Route path={"networking"} component={Networking} />
        <Route path={"networking_redux"} component={NetworkingRedux} />
        <Route path={"realm"} component={Realm} />
        <Route path={"persistence"} component={Persistence} />
        <Route path={"asyncstorage"} component={AsyncStorage} />
        <Route path={"redux_persist"} component={ReduxPersist} />
        <Route path={"animation"} component={Animation} />
        <Route path={"animated"} component={Animated} />
        <Route path={"react_native_animatable"} component={ReactNativeAnimatable} />
        <Route path={"gestures"} component={Gestures} />
        <Route path={"boilerplates"} component={Boilerplates} />
        <Route path={"exercises"} component={Exercises} />
        <Route path={"todo_list"} component={TodoList} />
        <Route path={"todo_list_1"} component={TodoList1} />
        <Route path={"todo_list_2"} component={TodoList2} />
        <Route path={"todo_list_3"} component={TodoList3} />
        <Route path={"todo_list_4"} component={TodoList4} />
        <Route path={"reddit"} component={Reddit} />
        <Route path={"reddit_1"} component={Reddit1} />
        <Route path={"reddit_2"} component={Reddit2} />
        <Route path={"reddit_3"} component={Reddit3} />
        <Route path={"reddit_4"} component={Reddit4} />
        <Route path={"reddit_5"} component={Reddit5} />
        <Route path={"uber"} component={Uber} />
        <Route path={"uber_1"} component={Uber1} />
        <Route path={"uber_2"} component={Uber2} />
        <Route path={"uber_3"} component={Uber3} />
        <Route path={"uber_4"} component={Uber4} />

        { /* Catch all route */ }
        <Route path={"*"} component={NotFound} status={404} />
      </Route>
    </Route>
  )
}
