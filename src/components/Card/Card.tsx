import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

export const Card: React.FC = () => {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.image}
          src="img/phones/apple-iphone-xs/spacegray/00.jpg"
          alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        />

        <div className={styles.phone_infos}>
          <p className={styles.content}>
            Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
          </p>
          <div className={styles.prices}>
            <p className={styles.new_price}>$799</p>
            <p className={styles.old_price}>$899</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.screen_info}>
            <p className={styles.screen}>Screen</p>
            <p className={styles.screen_type}>5.8” OLED</p>
          </div>

          <div className={styles.capacity_info}>
            <p className={styles.capacity}>Capacity</p>
            <p className={styles.capacity_type}>64 GB</p>
          </div>

          <div className={styles.ram_info}>
            <p className={styles.ram}>RAM</p>
            <p className={styles.ram_type}>4 GB</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button_add_to_card}>
            <a className={styles.button_link} href="#button" data-qa="hover">
              Add to cart
            </a>
          </button>
          <Link to="#" className={styles.add_to_favorite}></Link>
        </div>
      </div>
    </>
  );
};
