import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../../@types/Phone';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    image: imageLink,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = phone;

  return (
    <>
      <div className={styles.card}>
        <img className={styles.image} src={imageLink} alt={name} />

        <div className={styles.phone_infos}>
          <p className={styles.content}>{name}</p>
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
          <a
            className={styles.button_add_to_card}
            href="#button"
            data-qa="hover"
          >
            Add to cart
          </a>
          <Link to="#" className={styles.add_to_favorite}></Link>
        </div>
      </div>
    </>
  );
};
