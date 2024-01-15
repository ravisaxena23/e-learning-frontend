import { combineReducers } from 'redux';
import countryReducer from './countryReducer';
import stateReducer from './stateReducer';
import cityReducer from './cityReducer';
import collegeReducer from './collegeReducer';

const rootReducer = combineReducers({
  country: countryReducer,
  state: stateReducer,
  city:cityReducer,
  college:collegeReducer
});

export default rootReducer;