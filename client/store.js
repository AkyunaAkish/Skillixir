import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

export default process.env.NODE_ENV === 'development' ?
               applyMiddleware(promise, thunk, logger())(createStore) :
               applyMiddleware(promise, thunk)(createStore);
