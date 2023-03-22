import React from 'react';
import styles from './CartItem.module.scss';
import icon_minus from '../../assets/img/icons/minus.svg';
import icon_plus from '../../assets/img/icons/plus.svg';
import icon_close from '../../assets/img/icons/close.svg';
import { Phone } from '../../@types/Phone';
import { useAppDispatch } from '../../app/hooks';
import { Link } from 'react-router-dom';
import {
  addPhoneToCart,
  deletePhoneFromCart,
  removeOnePhoneFromCart,
} from '../../features/cart/cartSlice';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const dispatch = useAppDispatch();
  const { id, name, image, fullPrice, count, phoneId } = phone;
  console.log(dispatch);
  return (
    <div className={styles.cart}>
      <div className={styles.cart_info}>
        <button
          className={styles.delete_button_link}
          onClick={() => dispatch(deletePhoneFromCart(id))}
        >
          <img
            className={styles.delete_button_img}
            src={icon_close}
            alt="remove phone"
          />
        </button>
        <Link to={`/phones/${phoneId}`}>
          <img className={styles.phone_image} src={image} alt={name} />
        </Link>
        <Link to={`/phones/${phoneId}`} className={styles.content}>
          {name}
        </Link>
      </div>

      <div className={styles.quantity_and_price}>
        <div className={styles.quantity_buttons}>
          <button
            className={styles.quantity_buttons_minus}
            disabled={(count as number) < 2}
            onClick={() => dispatch(removeOnePhoneFromCart(id))}
          >
            <img
              className={styles.quantity_minus_img}
              src={icon_minus}
              alt="x"
            />
          </button>

          <p className={styles.quantity_buttons_number}>{count}</p>

          <button
            className={styles.quantity_buttons_plus}
            disabled={(count as number) >= 10}
            onClick={() => dispatch(addPhoneToCart(phone))}
          >
            <img className={styles.quantity_lus_img} src={icon_plus} alt="x" />
          </button>
        </div>

        <p className={styles.phone_price}>${fullPrice}</p>
      </div>
    </div>
  );
};
