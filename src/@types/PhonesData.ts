import { Phone } from './Phone';

export interface PhonesData {
  filter(arg0: (productCard: any) => boolean): unknown;
  find(arg0: (productCard: any) => boolean): unknown;
  phones: Phone[];
  total: number;
  perPage: number;
  page: number;
}
