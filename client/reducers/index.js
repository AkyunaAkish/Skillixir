import { combineReducers } from 'redux';
import numberReducer from './numberReducer';

const rootReducer = combineReducers({
  number_reducer: numberReducer
});

export default rootReducer;
