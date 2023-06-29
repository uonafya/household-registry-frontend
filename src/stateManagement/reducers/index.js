import { combineReducers } from 'redux';
// import * from './reducers';
import householdFormReducer from './householdReducer';

// Import other reducers if necessary

const rootReducer = combineReducers({
  householdState: householdFormReducer,
  // Add other reducers here
});

export default rootReducer;
