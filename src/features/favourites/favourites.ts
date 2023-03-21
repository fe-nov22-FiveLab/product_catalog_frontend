import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../../@types/Phone';
import { RootState } from '../../app/store';

export interface FavouritesState {
  phones: Phone[];
}

const initialState: FavouritesState = {
  phones: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addPhoneToFavourites: (state, action: PayloadAction<Phone>) => {
      state.phones.push({
        ...action.payload,
      });
    },
    deletePhoneFromFavourites: (state, action: PayloadAction<number>) => {
      state.phones = state.phones.filter(
        (phone) => phone.id !== action.payload,
      );
    },
  },
});

export const { addPhoneToFavourites, deletePhoneFromFavourites } =
  favouritesSlice.actions;

export const selectFavourites = (state: RootState) => state.favourites;

export default favouritesSlice.reducer;
