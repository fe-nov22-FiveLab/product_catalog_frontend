import { PhoneDetails } from './PhoneDetails';

export interface Phone {
  id: number;
  categoryId: number;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  phoneDetails: PhoneDetails;
  count?: number;
}
