import React from 'react';
import styles from './PhonesPage.module.scss';
import { Catalog } from '../../components/Catalog';

export const PhonesPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Mobile phones</h1>
      <Catalog />
    </>
  );
};
