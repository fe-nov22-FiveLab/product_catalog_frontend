import React from 'react';
import { CartCheckout } from './CartCheckout/CartCheckout';
import { CartItem } from './CartItem/CartItem';
import  styles  from './CartPage.module.scss';

export const CartPage: React.FC = () => {
  return (
    <>
      <div className={styles.cart_page}>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <CartCheckout />
      </div>

    </>
  );
};
