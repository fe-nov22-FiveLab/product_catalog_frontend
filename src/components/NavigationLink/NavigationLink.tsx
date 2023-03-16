import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';

interface Props {
  path: string;
  text: string;
  isOpenMenu?: (isOpen: boolean) => void;
  styleClass: string;
}

export const NavigationLink: React.FC<Props> = ({
  path,
  text,
  isOpenMenu,
  styleClass,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => classNames(styleClass, { [styles.is_active]: isActive })}
      onClick={() => isOpenMenu !== undefined && isOpenMenu(false)}
    >
      {text}
    </NavLink>
  );
};
