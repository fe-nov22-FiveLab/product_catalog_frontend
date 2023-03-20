import { Phone } from '../@types/Phone';

export const countTotalPrice = (phones: Phone[]): number => {
  return phones.reduce(
    (sum, phone) => sum + <number>phone.count * phone.fullPrice,
    0,
  );
};
