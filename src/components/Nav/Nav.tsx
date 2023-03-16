import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <NavLink to="home">
          <img
            className={styles.nav__logo__image}
            src="img/icons/logo.svg"
            alt="logo"
          />
        </NavLink>
      </div>

      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavigationLink path="/" text="HOME" />
        </li>

        <li className={styles.nav__item}>
          <NavigationLink path="phones" text="PHONES" />
        </li>

        <li className={styles.nav__item}>
          <NavigationLink path="tablets" text="TABLETS" />
        </li>

        <li className={styles.nav__item}>
          <NavigationLink path="accessories" text="ACCESSORIES" />
        </li>
      </ul>
    </nav>
  );
};
