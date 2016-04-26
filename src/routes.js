import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Chat,
    // Home,
    Widgets,
    // About,
    Login,
    LoginSuccess,
    Survey,
    NotFound,
    Sandbox,
  } from 'containers';

import Babel from 'containers/Pages/Babel';
import ES6 from 'containers/Pages/ES6';
import View from 'containers/Pages/View';
import ComponentPage from 'containers/Pages/Component';
import ComponentAPI from 'containers/Pages/ComponentAPI';
import LifecycleAPI from 'containers/Pages/LifecycleAPI';
import Introduction from 'containers/Pages/Introduction';
import GettingStarted from 'containers/Pages/GettingStarted';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/">

      <Route path="sandbox/:sandboxId" component={Sandbox}/>

      <Route component={App}>
        { /* Home (main) route */ }
        <IndexRoute component={Introduction}/>

        { /* Routes requiring login */ }
        <Route onEnter={requireLogin}>
          <Route path="chat" component={Chat}/>
          <Route path="loginSuccess" component={LoginSuccess}/>
        </Route>

        { /* Routes */ }
        <Route path="intro" component={Introduction}/>
        <Route path="babel" component={Babel}/>
        <Route path="components" component={ComponentPage}/>
        <Route path="component_api" component={ComponentAPI}/>
        <Route path="lifecycle_api" component={LifecycleAPI}/>
        <Route path="es6" component={ES6}/>
        <Route path="view" component={View}/>
        <Route path="login" component={Login}/>
        <Route path="survey" component={Survey}/>
        <Route path="start" component={GettingStarted}/>
        <Route path="widgets" component={Widgets}/>

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
      </Route>
    </Route>
  );
};
