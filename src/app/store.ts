import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/cart/cartSlice';
import favourietesReducer from '../features/favourites/favourites';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourites: favourietesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
