import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const persistContactsReducer = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

// export const persistor = persistStore(store);
