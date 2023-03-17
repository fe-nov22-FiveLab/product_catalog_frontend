import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import favourites_heart from '../../assets/img/favourites_heart.svg';
import bag from '../../assets/img/bag.svg';

export const Header: React.FC = () => {
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

              <img src={bag} />
            </div>
          </NavLink>
        </div>

        <BurgerMenu />
      </header>
    </>
  );
};
