import React from 'react';
import { HomeSwiper } from '../../components/HomeSwiper';
import { PhonesFilter } from '../../components/PhonesFilter';
import { PhonesSlider } from '../../components/PhonesSlider';
import { SimpleSlider } from '../../components/SimpleSlider';

import styles from './HomePage.module.scss';


export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Welcome to Nice Gadgets store!</p>

      <HomeSwiper />

      {/* <SimpleSlider /> */}

      {/* <PhonesSlider /> */}
    </div>
  );
};
