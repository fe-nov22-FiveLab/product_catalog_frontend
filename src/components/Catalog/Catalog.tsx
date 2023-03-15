import React from 'react';
import styles from './Catalog.module.scss';
import { Card } from '../Card/Card';

export const Catalog: React.FC = () => {
  return(
    <>
      <div className={styles.container}>Catalog
        <Card />
      </div>

    </>
  );
};
