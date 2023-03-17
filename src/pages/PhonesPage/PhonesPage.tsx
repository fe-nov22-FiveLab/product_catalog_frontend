import React from 'react';
import styles from './PhonesPage.module.scss';
import { Catalog } from '../../components/Catalog';
import { PhonesFilter } from '../../components/PhonesFilter';
import { Pagination } from '../../components/Pagination';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';

export const PhonesPage: React.FC = () => {
  // const total = 95;
  // get data from server here: phones, total
  return (
    <>
      <Breadcrumbs location="phones" />
      <h1 className={styles.title}>Mobile phones</h1>
      <PhonesFilter />
      <Catalog />
      <Pagination total={95} />
    </>
  );
};
// total={95}
