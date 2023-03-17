import React from 'react';
import styles from './PhonesPage.module.scss';
import { Catalog } from '../../components/Catalog';
import { PhonesFilter } from '../../components/PhonesFilter';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const PhonesPage: React.FC = () => {
  return (
    <>
      <Breadcrumbs location="phones" />
      <h1 className={styles.title}>Mobile phones</h1>
      <PhonesFilter />
      <Catalog />
    </>
  );
};
