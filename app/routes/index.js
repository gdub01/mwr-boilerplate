import React from 'react';
import { Router, Route, Link, NotFoundRoute } from 'react-router';
import createHistory from 'react-router/node_modules/history/lib/createBrowserHistory';

import App from './App.jsx';
import Demo from './Demo.jsx'
import * as Plans from './Plans';
//import Dashboard from './Dashboard.jsx';
//import AuthJoinPage from './AuthJoinPage.jsx';
//import AuthSignInPage from './AuthSignInPage.jsx';

var history = createHistory();

React.render(
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Demo} />
      <Route path="/plan/:id" component={Plans.View} />
      <Route path="/super-global-dashboard/plan/add" component={Plans.Create} />
      <Route path="/super-global-dashboard/plan/edit/:id" component={Plans.Edit} />
    </Route>
  </Router>,
  document.getElementById('root')
);
