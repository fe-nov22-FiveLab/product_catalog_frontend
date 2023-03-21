import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cart/cartSlice';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout';
import { CartItem } from '../../components/CartItem/CartItem';
import styles from './CartPage.module.scss';
import arrowBack from '../../assets/img/icons/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

export const CartPage: React.FC = () => {
  const { phones } = useAppSelector(selectCart);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={goBack}>
        <img
          className={styles.button__image}
          src={arrowBack}
          alt="Back arrow"
        />
        <span className={styles.button__text}>Back</span>
      </div>
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
    </div>
  );
};
