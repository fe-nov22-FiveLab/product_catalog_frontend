import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from '../features/cart/cartSlice';
import favouritesReducer from '../features/favourites/favourites';

const rootReducer = combineReducers({
  cart: cartReducer,
  favourites: favouritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favourites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  store.getState();
  return result;
};

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     favourites: favouritesReducer,
//   },
// });

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(persistMiddleware),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
