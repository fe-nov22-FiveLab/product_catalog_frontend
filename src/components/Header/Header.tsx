import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import favourites_heart from '../../assets/img/icons/favourites_heart.svg';
import bag from '../../assets/img/icons/bag.svg';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cart/cartSlice';
import { selectFavourites } from '../../features/favourites/favourites';

export const Header: React.FC = () => {
  const { phones } = useAppSelector(selectCart);
  const { phones: favoritePhones } = useAppSelector(selectFavourites);

  const totalPhones = phones.reduce(
    (sum, phone) => (phone.count as number) + sum,
    0,
  );

  const totalFavoritesPhones = favoritePhones.reduce(
    (sum, phone) => (phone.count as number || 1) + sum,
    0,
  );

  return (
    <>
      <header className={styles.header}>
        <Nav />

        <div className={styles.icon}>
          <NavLink to="favourites">
            <div>
              <div className={styles.icon__action}>
                <div className={styles.favorites_counter}>{totalFavoritesPhones}</div>
                <img src={favourites_heart} alt="favourites" />
              </div>
            </div>

          </NavLink>

          <NavLink to="cart">

            <div className={styles.icon__action}>
              <div className={styles.cart_counter}>{totalPhones}</div>
              <img src={bag} />
            </div>
          </NavLink>
        </div>

        <BurgerMenu />
      </header>
    </>
  );
};
