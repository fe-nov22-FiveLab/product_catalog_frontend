import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import logo from '../../assets/img/icons/logo.svg';
import cross from '../../assets/img/icons/cross.svg';
import favourites_heart from '../../assets/img/icons/favourites_heart.svg';
import bag from '../../assets/img/icons/bag.svg';
import { NavLinkBurger } from '../NavLinkBurger/NavLinkBurger';
import { useAppSelector } from '../../app/hooks';
import { selectCart } from '../../features/cart/cartSlice';
import { selectFavourites } from '../../features/favourites/favourites';

export const BurgerMenu: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  useEffect(() => {
    if (isActiveBurger) {
      document.body.classList.add(styles.burger__icon_open);
    } else {
      document.body.classList.remove(styles.burger__icon_open);
      document.body.classList.add(styles.burger__icon_close);
      setTimeout(() => {
        document.body.classList.remove(styles.burger__icon_close);
      }, 300);
    }
  }, [isActiveBurger]);

  const { phones } = useAppSelector(selectCart);
  const { phones: favoritePhones } = useAppSelector(selectFavourites);

  const totalFavoritesPhones = favoritePhones.reduce(
    (sum, phone) => ((phone.count as number) || 1) + sum,
    0,
  );

  const totalPhones = phones.reduce(
    (sum, phone) => (phone.count as number) + sum,
    0,
  );

  return (
    <>
      <div
        className={styles.burger__icon}
        onClick={() => setIsActiveBurger(true)}
      >
        <div>
          <div className={styles.btn_line}></div>
          <div className={styles.btn_line}></div>
          <div className={styles.btn_line}></div>
        </div>
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
                {totalFavoritesPhones > 0 && (
                  <div className={styles.cartCounter}>
                    {totalFavoritesPhones}
                  </div>
                )}
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
                <div className={styles.cart_logo}>
                  {totalPhones > 0 && (
                    <div className={styles.cartCounter}>{totalPhones}</div>
                  )}
                  <img src={bag} alt="shopping bag" />
                </div>
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
