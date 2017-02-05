import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';

export default (
  <Route path='/' component={ Layout }>
    <IndexRoute component={ Home } />
    <Redirect from='*' to='/' />
  </Route>
);
