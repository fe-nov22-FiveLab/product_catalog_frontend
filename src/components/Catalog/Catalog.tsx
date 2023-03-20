import React from 'react';
import styles from './Catalog.module.scss';
import { Card } from '../Card/Card';
import { Phone } from '../../@types/Phone';

type Props = {
  phones: Phone[];
};

export const Catalog: React.FC<Props> = ({ phones }) => {
  return (
    <div className={styles.catalog}>
      {phones.map((phone) => (
        <div key={phone.id} className={styles.catalog__item}>
          <Card phone={phone} />
        </div>
      ))}
    </div>
  );
};
