import React from 'react';
import styles from './Catalog.module.scss';
import { Card } from '../Card/Card';
import { Phone } from '../../@types/Phone';
import { Loader } from '../Loader/Loader';

type Props = {
  phones: Phone[];
  isLoading: boolean;
};

export const Catalog: React.FC<Props> = ({ phones, isLoading }) => {
  return (
    <div className={styles.catalog}>
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => <Loader key={i} />)
        : phones.map((phone) => (
          <div key={phone.id} className={styles.catalog__item}>
            <Card phone={phone} />
          </div>
        ))}
    </div>
  );
};
