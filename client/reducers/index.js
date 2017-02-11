import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  session_reducer: sessionReducer
});

export default rootReducer;
