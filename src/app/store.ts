import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     favourites: favouritesReducer,
//   },
// });

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'favourites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
