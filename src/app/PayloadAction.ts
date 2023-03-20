import { PhonesData } from '../@types/PhonesData';
import { Phone } from '../@types/Phone';
import { ActionType } from './ActionType';

export type PayloadAction =
  | { type: ActionType.ADD_TO_CART; payload: Phone }
  | { type: ActionType.REMOVE_FROM_CART; payload: number }
  | { type: ActionType.ADD_FAVOURITE; payload: Phone }
  | { type: ActionType.LOAD_PHONES; payload: PhonesData };
