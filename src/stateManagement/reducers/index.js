import { combineReducers } from 'redux';
// import * from './reducers';
import personReducer from './personReducer';
import householdReducer from './householdReducer';

// Import other reducers if necessary

const rootReducer = combineReducers({
  personState: personReducer,
  householdState: householdReducer,
  // Add other reducers here
});

export default rootReducer;
