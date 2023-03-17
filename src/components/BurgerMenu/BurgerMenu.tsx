import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import logo from '../../assets/img/icons/logo.svg';
import cross from '../../assets/img/icons/cross.svg';
import favourites_heart from '../../assets/img/icons/favourites_heart.svg';
import bag from '../../assets/img/icons/bag.svg';
import { NavLinkBurger } from '../NavLinkBurger/NavLinkBurger';
import burger from '../../assets/img/icons/burger.svg';

export const BurgerMenu: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  useEffect(() => {
    if (isActiveBurger) {
      document.body.classList.add(styles.burger__with__menu);
    } else {
      document.body.classList.remove(styles.burger__with__menu);
    }
  }, [isActiveBurger]);

  return (
    <>
      <div className={styles.burger__icon}>
        <button
          onClick={() => setIsActiveBurger(true)}
          type="button"
          className={styles.burger__button_icon}
        >
          <img src={burger} alt="shopping bag" />
        </button>
      </div>

      {isActiveBurger && (
        <div className={styles.burger}>
          <nav className={styles.burger__nav}>
            <div className={styles.burger__header}>
              <div className={styles.burger__logo}>
                <NavLink to="home">
                  <img className={styles.burger__logo__image} src={logo} />
                </NavLink>
              </div>
              <button
                onClick={() => setIsActiveBurger(false)}
                type="button"
                className={styles.burger__button}
              >
                <img src={cross} alt="cross" />
              </button>
            </div>

            <div className={styles.burger__list}>
              <NavLinkBurger
                path="/"
                text="HOME"
                isOpenMenu={setIsActiveBurger}
              />
              <NavLinkBurger
                path="phones"
                text="PHONES"
                isOpenMenu={setIsActiveBurger}
              />
              <NavLinkBurger
                path="tablets"
                text="TABLETS"
                isOpenMenu={setIsActiveBurger}
              />
              <NavLinkBurger
                path="accessories"
                text="ACCESSORIES"
                isOpenMenu={setIsActiveBurger}
              />
            </div>

            <div className={styles.burger__header__bottom}>
              <NavLink
                to="favourites"
                onClick={() => setIsActiveBurger(false)}
                className={({ isActive }) =>
                  classNames(styles.burger__header__icon, {
                    [styles.is_active]: isActive,
                  })
                }
              >
                <img src={favourites_heart} alt="favourites" />
              </NavLink>

              <NavLink
                to="cart"
                onClick={() => setIsActiveBurger(false)}
                className={({ isActive }) =>
                  classNames(styles.burger__header__icon__bag, {
                    [styles.is_active]: isActive,
                  })
                }
              >
                <img src={bag} alt="shopping bag" />
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
