import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <NavLink to="home">
          <img className={styles.nav__logo__image} src="/img/icons/logo.svg" alt="logo" />
        </NavLink>
      </div>

      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavigationLink path="/" text="HOME" styleClass={styles.nav__link} />
        </li>

        <li className={styles.nav__item}>
          <NavigationLink path="phones" text="PHONES" styleClass={styles.nav__link} />
        </li>

        <li className={styles.nav__item}>
          <NavigationLink
            path="tablets"
            text="TABLETS"
            styleClass={styles.nav__link}
          />
        </li>

        <li className={styles.nav__item}>
          <NavigationLink
            path="accessories"
            text="ACCESSORIES"
            styleClass={styles.nav__link}
          />
        </li>
      </ul>
    </nav>
  );
};
