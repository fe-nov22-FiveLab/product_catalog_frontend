import React from 'react';
import styles from './AccessoriesPage.module.scss';
import underConstruction from '../../assets/img/under-construction.jpg';

export const AccessoriesPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={underConstruction}
        alt="page under construction"
      />
    </div>
  );
};
