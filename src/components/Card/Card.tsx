import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../../@types/Phone';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addPhoneToCart,
  deletePhoneFromCart,
  selectCart,
} from '../../features/cart/cartSlice';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const { phones } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const {
    id,
    phoneId,
    image: imageLink,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = phone;

  const hasAddedToCart = phones.find((phone) => phone.id === id);

  return (
    <>
      <div className={styles.card}>
        <img className={styles.image} src={imageLink} alt={name} />

        <div className={styles.phone_infos}>
          <Link to={`/phone/${phoneId}`} className={styles.content}>
            {name}
          </Link>
          <div className={styles.prices}>
            <p className={styles.new_price}>{`$${price}`}</p>
            <p className={styles.old_price}>{`$${fullPrice}`}</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.screen_info}>
            <p className={styles.screen}>Screen</p>
            <p className={styles.screen_type}>{screen}</p>
          </div>

          <div className={styles.capacity_info}>
            <p className={styles.capacity}>Capacity</p>
            <p className={styles.capacity_type}>{capacity}</p>
          </div>

          <div className={styles.ram_info}>
            <p className={styles.ram}>RAM</p>
            <p className={styles.ram_type}>{ram}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          {!hasAddedToCart ? (
            <button
              className={styles.button_add_to_card}
              onClick={() => dispatch(addPhoneToCart(phone))}
            >
              Add to cart
            </button>
          ) : (
            <button
              className={styles.button_added_to_cart}
              onClick={() => dispatch(deletePhoneFromCart(id))}
            >
              Added to Cart
            </button>
          )}
          <Link to="#" className={styles.add_to_favorite}></Link>
        </div>
      </div>
    </>
  );
};
