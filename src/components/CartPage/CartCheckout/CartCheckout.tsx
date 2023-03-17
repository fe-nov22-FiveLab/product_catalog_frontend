import React from 'react';
import  styles  from './CartCheckout.module.scss';

export const CartCheckout: React.FC = () => {
  return (
    <>
      <div className={styles.total_checkout}>
        <div className={styles.info}>
          <p className={styles.total_price}>$2657</p>
          <p className={styles.number_of_items}>Total for 3 items</p>
          <div className={styles.line}></div>
          <button className={styles.button_checkout}>
            <a className={styles.button_link} href="#button" data-qa="hover">
              Checkout
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
