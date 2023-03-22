import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinkBurger.module.scss';

interface Props {
  path: string;
  text: string;
  isOpenMenu?: (isOpen: boolean) => void;
}

export const NavLinkBurger: React.FC<Props> = ({ path, text, isOpenMenu }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames(styles.burger__link, { [styles.is_active]: isActive })
      }
      onClick={() => isOpenMenu !== undefined && isOpenMenu(false)}
    >
      {text}
    </NavLink>
  );
};
