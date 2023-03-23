import React from 'react';
import { Catalog } from '../../components/Catalog';
import styles from './FavouritesPage.module.scss';
import { useAppSelector } from '../../app/hooks';
import { selectFavourites } from '../../features/favourites/favourites';

export const FavouritesPage: React.FC = () => {
  const { phones } = useAppSelector(selectFavourites);
  const phonesAmount = phones.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Favourites</h1>
      {phonesAmount > 1 || phonesAmount === 0 ? (
        <p className={styles['items-amount']}>{phonesAmount} items</p>
      ) : (
        <p className={styles['items-amount']}>{phonesAmount} item</p>
      )}


      {phones.length === 0 ? (
        <p className={styles.message}>You don&apos;t have favourites yet</p>
      ) : (
        <Catalog phones={phones} isLoading={false} />
      )}
    </div>
  );
};
