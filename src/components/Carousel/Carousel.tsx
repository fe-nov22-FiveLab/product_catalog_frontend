import React, { useState } from 'react';
import { SimpleSlider } from '../SimpleSlider';
import styles from './Carousel.module.scss';
import buttonLeft from '../../assets/img/slider-button-left.svg';
import buttonRight from '../../assets/img/slider-button-right.svg';


export const Carousel: React.FC = () => {
  const [prevSlide, setPrevSlide] = useState(false);
  const [nextSlide, setNextSlide] = useState(false);

  const handlePrevSlide = () => {
    setPrevSlide(prevState => !prevState);
  };

  const handleNextSlide = () => {
    setNextSlide(prevState => !prevState);
  };

  return (
    <div className={styles.container} >
      <div
        className={styles.button_left}
        onClick={handlePrevSlide}
      >
        <img src={buttonLeft} alt="prev slide" />
      </div>

      <div className={styles.slider}>
        <SimpleSlider prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>

      <div
        className={styles.button_right}
        onClick={handleNextSlide}
      >
        <img src={buttonRight} alt="next slide" />
      </div>
    </div>
  );
};



