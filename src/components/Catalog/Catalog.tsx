import React from 'react';
import styles from './Catalog.module.scss';
import { Card } from '../Card/Card';

export const Catalog: React.FC = () => {
  return (
    <>
      <div className={styles.catalog}>
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

        <div className={styles.catalog__item}>
          <Card />
        </div>
      </div>
    </>
  );
};
