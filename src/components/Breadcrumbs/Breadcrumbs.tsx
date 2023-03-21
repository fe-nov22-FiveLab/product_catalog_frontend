import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import home from '../../assets/img/icons/home.svg';
import arrow from '../../assets/img/icons/arrow.svg';
import classNames from 'classnames';

export const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/cart') {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link to="/home" className={styles.breadcrumbs__home}>
          <img src={home} alt="Go Home" />
        </Link>

        {breadcrumbs.map(({ match, location, breadcrumb }, ind) =>
          !ind ? (
            ''
          ) : (
            <React.Fragment key={ind}>
              <img
                src={arrow}
                alt="arrow"
                className={styles.breadcrumbs__arrow}
              />

              <Link
                to={match.pathname}
                key={match.pathname}
                className={classNames(styles.breadcrumbs__nav, {
                  [styles.breadcrumbs__nav__is_active]:
                    match.pathname === location.pathname,
                })}
              >
                {breadcrumb}
              </Link>
            </React.Fragment>
          ),
        )}
      </div>
    </div>
  );
};
