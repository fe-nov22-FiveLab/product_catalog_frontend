import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import favourites_heart from '../../assets/img/favourites_heart.svg';
import bag from '../../assets/img/bag.svg';
import burger from '../../assets/img/burger.svg';

export const Header: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <>
      {isActiveBurger && (
        <BurgerMenu
          handleCloseBurger={setIsActiveBurger}
        />
      )}
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

          <button
            onClick={() => setIsActiveBurger(true)}
            type="button"
            className={styles.icon__action__burger_menu}
          >
            <img src={burger} />
          </button>
        </div>
      </header>
    </>
  );
};
