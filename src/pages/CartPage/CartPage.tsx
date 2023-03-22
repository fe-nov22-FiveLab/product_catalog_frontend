import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cart/cartSlice';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout';
import { CartItem } from '../../components/CartItem/CartItem';
import styles from './CartPage.module.scss';
import arrowBack from '../../assets/img/icons/arrow-back.svg';
import empty_cart from '../../assets/img/empty-cart.png';
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
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cart_page}>
        <div className={styles.cart_list}>
          {phones.length > 0 ? (
            phones.map((phone) => <CartItem key={phone.id} phone={phone} />)
          ) : (
            <div className={styles.wrapper_cart_image}></div>
          )}
        </div>
        <CartCheckout />
      </div>
    </div>
  );
};
