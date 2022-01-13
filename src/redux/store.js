import { configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import phonebookReducer from '../redux/contacts/contactsReducer';
import combineReducers from './contacts/contactsReducer'

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const PersistConfig = {
  key: 'contacts',
  storage,
  version: 1,
  blacklist: ['filter'],
};

// const rootReducers = combineReducers({contacts: contactsReducer});

const persistedStore = persistReducer(PersistConfig, combineReducers)

const store = configureStore({
  reducer: {contacts: persistedStore},
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export  default { store, persistor };