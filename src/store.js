import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './stateManagement/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine (localStorage, sessionStorage, etc.)


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;

