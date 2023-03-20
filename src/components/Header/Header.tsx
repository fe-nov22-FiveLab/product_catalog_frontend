import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import favourites_heart from '../../assets/img/icons/favourites_heart.svg';
import bag from '../../assets/img/icons/bag.svg';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cart/cartSlice';

export const Header: React.FC = () => {
  const { phones } = useAppSelector(selectCart);

  const totalPhones = phones.reduce(
    (sum, phone) => (phone.count as number) + sum,
    0,
  );

  return (
    <>
      <header className={styles.header}>
        <Nav />

        <div className={styles.icon}>
          <NavLink to="favourites">
            <div className={styles.icon__action}>
              <img src={favourites_heart} alt="favourites" />
            </div>
          </NavLink>


          <NavLink to="cart">

            <div className={styles.icon__action}>
              <div className={styles.cartCounter}>{totalPhones}</div>
              <img src={bag} />
            </div>
          </NavLink>
        </div>

        <BurgerMenu />
      </header>
    </>
  );
};
