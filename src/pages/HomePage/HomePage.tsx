import React from 'react';
import { PhonesSlider } from '../../components/PhonesSlider';
import { ShopByCategory } from '../../components/ShopByCategory';
import { SimpleSlider } from '../../components/SimpleSlider';

export const HomePage: React.FC = () => {
  return (
    <>
      <p>Welcome to Nice Gadgets store!</p>

      <SimpleSlider />

      {/* <PhonesSlider /> */}
      <ShopByCategory />
    </>
  );
};
