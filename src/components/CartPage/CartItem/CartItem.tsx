import React from 'react';
import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const CartItem: React.FC = () => {
  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart_info}>
          <Link to="#" className={styles.delete_button_link}>
            <img className={styles.delete_button_img}src="/img/icons/close_grey.svg" alt="x" />
          </Link>
          <img className={styles.phone_image} src="img/phones/apple-iphone-xs/spacegray/00.jpg"
            alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
          />
          <p className={styles.content}>Apple iPhone 14 Pro 128GB Silver (MQ023)</p>
        </div>

        <div className={styles.quantity_and_price}>
          <div className={styles.quantity_buttons}>
            <div className={styles.minus}>
              <Link to="#" className={classNames(styles.quantity_buttons_minus, { [styles.is_active]: true })}
              >
                <img className={styles.quantity_minus_img} src="/img/icons/minus_grey.svg" alt="x" />
              </Link>
            </div>

            <p className={styles.quantity_buttons_number}>1</p>

            <div className={styles.plus}>
              <Link to="#" className={styles.quantity_buttons_plus}>
                <img className={styles.quantity_lus_img} src="/img/icons/plus.svg" alt="x" />
              </Link>

            </div>
          </div>


          <p className={styles.phone_price}>$999</p>
        </div>

      </div>
    </>

  );
};
