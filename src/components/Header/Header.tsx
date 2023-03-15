import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <a href="#home">
            <img
              className={styles.nav__logo__image}
              src="../../../public/img/icons/logo.svg"
              alt="logo"
            />
          </a>
        </div>

        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a className={styles.nav__link__active} href="#apple">Home</a>
          </li>

          <li className={styles.nav__item}>
            <a className={styles.nav__link} href="#phones">Phones</a>
          </li>

          <li className={styles.nav__item}>
            <a className={styles.nav__link} href="#tablets">Tablets</a>
          </li>

          <li className={styles.nav__item}>
            <a
              className={styles.nav__link}
              href="#accessories"
            >
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.icon}>
        <a className={styles.icon_favourites} href="#favourites">
        </a>

        <a className={styles.icon_shop_bag} href="#shopBag">
        </a>

        <a className={styles.icon_burger_menu} href="#burgerMenu">
        </a>
      </div>
    </header>
  );
};
