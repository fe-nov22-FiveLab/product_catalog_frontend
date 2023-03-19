import { Phone } from '../@types/Phone';

export interface State {
  catalogPhones: Phone[];
  total: number;
  favouritePhones: Phone[];
  phonesToBuy: Phone[];
}
