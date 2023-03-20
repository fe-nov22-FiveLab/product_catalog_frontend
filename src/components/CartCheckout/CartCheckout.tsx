import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cart/cartSlice';
import styles from './CartCheckout.module.scss';

export const CartCheckout: React.FC = () => {
  const { phones, totalPrice } = useAppSelector(selectCart);

  const totalPhones = phones.reduce(
    (sum, phone) => (phone.count as number) + sum,
    0,
  );

  return (
    <>
      <div className={styles.total_checkout}>
        <div className={styles.info}>
          <p className={styles.total_price}>${totalPrice}</p>
          <p className={styles.number_of_items}>
            {`Total for ${totalPhones} ${totalPhones === 1 ? 'item' : 'items'}
            `}
          </p>
          <div className={styles.line}></div>
          <button className={styles.button_checkout} data-qa="hover">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
