import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Layout from './components/Layout';
import Gateway from './components/navigation/Gateway';
import Offering from './components/search/Offering';
import Seeking from './components/search/Seeking';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Session from './components/session/Session';

export default (
  <Route path='/' component={ Layout }>
    <IndexRoute component={ Gateway } />
    <Route path='/offering' component={ Offering }></Route>
    <Route path='/seeking' component={ Seeking }></Route>
    <Route path='/signin' component={ SignIn }></Route>
    <Route path='/signup' component={ SignUp }></Route>
    <Route path='/session/:id' component={ Session }></Route>
    <Redirect from='*' to='/' />
  </Route>
);
