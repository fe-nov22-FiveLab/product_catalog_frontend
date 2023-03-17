import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

import home from '../../assets/img/icons/home.svg';
import arrow from '../../assets/img/icons/arrow.svg';

interface Props {
  location: string;
}

export const Breadcrumbs: React.FC<Props> = ({ location }) => {
  const path = window.location.hash;

  const handleDisableClick = (event: React.MouseEvent, linkPath: string) => {
    if (path === `#/${linkPath}`) {
      event?.preventDefault();
    }
  };

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/home" className={styles.breadcrumbs__home}>
        <img src={home} alt="Go Home" />
      </Link>

      <img src={arrow} alt="arrow" className={styles.breadcrumbs__arrow} />

      <Link
        to={`/${location}`}
        className={styles.breadcrumbs__nav}
        onClick={(event) => handleDisableClick(event, location)}
      >
        <p>{`${location[0].toUpperCase()}${location.slice(1)}`}</p>
      </Link>
    </div>
  );
};
