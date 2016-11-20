import React, { Component } from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import * as Analytics from '../utils/Analytics'
import createProxyComponent from '../pages/createProxyComponent'

import App from './App'

import Introduction from '../pages/Introduction'

const GettingStarted = createProxyComponent('GettingStarted')
const Babel = createProxyComponent('Babel')
const ES6 = createProxyComponent('ES6')
const ES6Continued = createProxyComponent('ES6Continued')
const ES7AndBeyond = createProxyComponent('ES7AndBeyond')
const JSX = createProxyComponent('JSX')

const ComponentPage = createProxyComponent('Component')
const ComponentAPI = createProxyComponent('ComponentAPI')
const LifecycleAPI = createProxyComponent('LifecycleAPI')

const CoreComponents = createProxyComponent('CoreComponents')
const Flexbox = createProxyComponent('Flexbox')
const View = createProxyComponent('View')
const Text = createProxyComponent('Text')
const Image = createProxyComponent('Image')
const ScrollView = createProxyComponent('ScrollView')
const ListView = createProxyComponent('ListView')

const Data = createProxyComponent('Data')
const ComponentState = createProxyComponent('ComponentState')
const Redux = createProxyComponent('Redux')
const ReactRedux = createProxyComponent('ReactRedux')
const Realm = createProxyComponent('Realm')

const Persistence = createProxyComponent('Persistence')
const AsyncStorage = createProxyComponent('AsyncStorage')
const ReduxPersist = createProxyComponent('ReduxPersist')

const Networking = createProxyComponent('Networking')
const NetworkingRedux = createProxyComponent('NetworkingRedux')

const Animation = createProxyComponent('Animation')
const Animated = createProxyComponent('Animated')
const ReactNativeAnimatable = createProxyComponent('ReactNativeAnimatable')
const Gestures = createProxyComponent('Gestures')

const Exercises = createProxyComponent('Exercises')

const TodoList = createProxyComponent('TodoList')
const TodoList1 = createProxyComponent('TodoList1')
const TodoList2 = createProxyComponent('TodoList2')
const TodoList3 = createProxyComponent('TodoList3')
const TodoList4 = createProxyComponent('TodoList4')

const Reddit = createProxyComponent('Reddit')
const Reddit1 = createProxyComponent('Reddit1')
const Reddit2 = createProxyComponent('Reddit2')
const Reddit3 = createProxyComponent('Reddit3')
const Reddit4 = createProxyComponent('Reddit4')
const Reddit5 = createProxyComponent('Reddit5')

const Uber = createProxyComponent('Uber')
const Uber1 = createProxyComponent('Uber1')
const Uber2 = createProxyComponent('Uber2')
const Uber3 = createProxyComponent('Uber3')
const Uber4 = createProxyComponent('Uber4')

const Boilerplates = createProxyComponent('Boilerplates')

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory} onUpdate={Analytics.pageView}>
        <Route path="/" component={App}>
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
          {/* <Route path={"*"} component={NotFound} status={404} /> */}
        </Route>
      </Router>
    )
  }
}
