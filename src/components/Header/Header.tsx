import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Nav />

        <div className={styles.icon}>
          <NavLink to="favourites">
            <div className={styles.icon__action}>
              <img src="img/icons/favourites.svg" alt="favourites" />
            </div>
          </NavLink>

          <NavLink to="cart">
            <div className={styles.icon__action}>
              <img src="img/icons/bag.svg" alt="shopping bag" />
            </div>
          </NavLink>

          <BurgerMenu />
        </div>
      </header>
    </>
  );
};
