import React from 'react';
import { PhonesFilter } from '../../components/PhonesFilter';
import { PhonesSlider } from '../../components/PhonesSlider';
import { SimpleSlider } from '../../components/SimpleSlider';

export const HomePage: React.FC = () => {
  return (
    <>
      <p>Welcome to Nice Gadgets store!</p>

      <SimpleSlider />

      {/* <PhonesSlider /> */}
    </>
  );
};
