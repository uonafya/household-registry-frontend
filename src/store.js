import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './stateManagement/reducers';
// Choose your storage engine (localStorage, sessionStorage, etc.)


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;

