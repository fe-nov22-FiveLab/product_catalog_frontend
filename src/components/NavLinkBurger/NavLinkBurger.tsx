import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../BurgerMenu/BurgerMenu.module.scss';

interface Props {
  path: string;
  text: string;
}

export const NavLinkBurger: React.FC<Props> = ({
  path,
  text,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => classNames(styles.burger__link, { [styles.is_active]: isActive })}
    >
      {text}
    </NavLink>
  );
};
