import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cart/cartSlice';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout';
import { CartItem } from '../../components/CartItem/CartItem';
import styles from './CartPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';

export const CartPage: React.FC = () => {
  const { phones } = useAppSelector(selectCart);

  return (
    <>
      <BackButton />
      <div className={styles.cart_page}>
        <div>
          {phones.length > 0 ? (
            phones.map((phone) => <CartItem key={phone.id} phone={phone} />)
          ) : (
            <h2 style={{ textAlign: 'center' }}>Cart is Empty</h2>
          )}
        </div>
        <CartCheckout />
      </div>
    </>
  );
};
