import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Catalog } from '../../components/Catalog';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Favourites</h1>

      {/* {favouritePhones.lenght === 0
        ? (
          <p>You don't have favourites yet</p>
        )
        : (
          <Catalog phones={favouritePhones} />
        )} */}
    </>
  );
};
