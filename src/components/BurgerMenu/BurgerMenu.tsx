import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import logo from '../../assets/img/logo.svg';
import cross from '../../assets/img/cross.svg';
import favourites_heart from '../../assets/img/favourites_heart.svg';
import bag from '../../assets/img/bag.svg';
import { NavLinkBurger } from '../NavLinkBurger/NavLinkBurger';

type Props = {
  handleCloseBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({ handleCloseBurger }) => {
  return (
    <nav className={styles.burger}>
      <div className={styles.burger__container}>
        <div className={styles.burger__logo}>
          <NavLink to="home">
            <img className={styles.burger__logo__image} src={logo} />
          </NavLink>
        </div>
        <button
          onClick={() => handleCloseBurger(false)}
          type="button"
          className={styles.burger__button}
        >
          <img src={cross} />
        </button>
      </div>

      <div className={styles.burger__list}>
        <NavLinkBurger path="/" text="HOME" />
        <NavLinkBurger path="phones" text="PHONES" />
        <NavLinkBurger path="tablets" text="TABLETS" />
        <NavLinkBurger path="accessories" text="ACCESSORIES" />
      </div>

      <div className={styles.burger__container__bottom}>
        <div className={styles.icon}>
          <div className={styles.icon__action}>
            <NavLink
              to="favourites"
              className={({ isActive }) => classNames(styles.icon__action__favourites, {
                [styles.is_active__bottom]: isActive,
              })}
            >
              <img src={favourites_heart} />
            </NavLink>
          </div>
        </div>

        <div className={styles.icon}>
          <div className={styles.icon__action}>
            <NavLink
              to="cart"
              className={({ isActive }) => classNames(styles.icon__action__shop_bag, {[
              styles.is_active__bottom]: isActive,
              })}
            >
              <img src={bag} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
