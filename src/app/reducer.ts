import { PayloadAction } from './PayloadAction';
import { State } from './InitialState';
import { ActionType } from './ActionType';

export const reducer = (state: State, action: PayloadAction) => {
  console.log(action);

  switch (action.type) {
  case ActionType.LOAD_PHONES:
    return {
      ...state,
      total: action.payload.total,
      catalogPhones: [...action.payload.phones],
    };
  case ActionType.ADD_TO_CART:
    return {
      ...state,
      phonesToBuy: [...state.phonesToBuy, action.payload],
    };
  case ActionType.REMOVE_FROM_CART:
    return {
      ...state,
      phonesToBuy: state.phonesToBuy.filter(
        (phone) => phone.id !== action.payload,
      ),
    };
  case ActionType.ADD_FAVOURITE:
    return {
      ...state,
      favouritePhones: [...state.favouritePhones, action.payload],
    };
  default:
    return state;
  }
};
