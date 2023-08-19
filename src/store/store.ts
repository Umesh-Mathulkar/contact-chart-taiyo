// Importing necessary functions and libraries
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducers';

// Configuration for persisting the Redux state
const persistConfig = {
  key: 'root', // Key used for storing in local storage
  storage, // Storage mechanism (e.g., local storage)
};

// Create a persisted reducer using the root reducer and persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
});

// Create a persistor for managing persisted state rehydration
export const persistor = persistStore(store);

// Export the configured store as the default export
export default store;
