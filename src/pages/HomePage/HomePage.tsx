import React from 'react';
import { HomeSwiper } from '../../components/HomeSwiper';
import { PhonesSwiper } from '../../components/PhonesSwiper';
import { ShopByCategory } from '../../components/ShopByCategory';

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      </div>

      <div className={styles.home_slider_container}>
        <HomeSwiper />
      </div>

      <PhonesSwiper title="Brand new models" sort="year" />

      <div className={styles.container}>
        <ShopByCategory />
      </div>

      <PhonesSwiper title="Hot prices" sort="price" />
    </>
  );
};
