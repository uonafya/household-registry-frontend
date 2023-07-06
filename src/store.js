import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './stateManagement/reducers';

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...middleware, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
