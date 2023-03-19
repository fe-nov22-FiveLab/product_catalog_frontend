import React from 'react';
import styles from './Catalog.module.scss';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom';

export const Catalog: React.FC = () => {
  return (
    <>
      <div className={styles.catalog}>
        <Link to="/product">
          <div className={styles.catalog__item}>
            <Card />
          </div>
        </Link>

        <div className={styles.catalog__item}>
          <Card />
        </div>

        <div className={styles.catalog__item}>
          <Card />
        </div>

        <div className={styles.catalog__item}>
          <Card />
        </div>

        <div className={styles.catalog__item}>
          <Card />
        </div>

        <div className={styles.catalog__item}>
          <Card />
        </div>

        <div className={styles.catalog__item}>
          <Card />
        </div>
      </div>
    </>
  );
};
