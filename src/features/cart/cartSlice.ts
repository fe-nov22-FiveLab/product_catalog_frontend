import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../../@types/Phone';
import { RootState } from '../../app/store';
import { countTotalPrice } from '../../utils/countTotalPrice';

export interface CartState {
  phones: Phone[];
  totalPrice: number;
}

const initialState: CartState = {
  phones: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPhoneToCart: (state, action: PayloadAction<Phone>) => {
      const foundPhone = state.phones.find(
        (phone) => phone.id === action.payload.id,
      );

      if (foundPhone && foundPhone.count) {
        if (foundPhone.count >= 10) {
          return state;
        }
        foundPhone.count++;
      } else {
        state.phones.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = countTotalPrice(state.phones);
    },
    removeOnePhoneFromCart: (state, action: PayloadAction<number>) => {
      const foundPhone = state.phones.find(
        (phone) => phone.id === action.payload,
      );

      if (foundPhone && foundPhone.count) {
        foundPhone.count--;
      }

      state.totalPrice = countTotalPrice(state.phones);
    },
    deletePhoneFromCart: (state, action: PayloadAction<number>) => {
      state.phones = state.phones.filter(
        (phone) => phone.id !== action.payload,
      );
      state.totalPrice = countTotalPrice(state.phones);
    },
    clearCart: (state) => {
      state.phones = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addPhoneToCart,
  removeOnePhoneFromCart,
  deletePhoneFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
