import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PhonesSlider.module.scss';
import buttonLeft from '../../assets/img/icons/button-left-disabled.svg';
import buttonRight from '../../assets/img/icons/button-right-disabled.svg';
import { Card } from '../Card/Card';

export const PhonesSlider: React.FC = () => {

  const slider = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    dotsClass: 'slick-dots slick-rectangle',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToNext = () => {
    slider?.current?.slickNext();
  };

  const goToPrev = () => {
    slider?.current?.slickPrev();
  };

  return (
    <div className={styles.container}>
      <div className={styles.top_panel}>
        <h2>Brand new models</h2>

        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={goToPrev}
          >
            <img
              src={buttonLeft}
              alt="prev slide"
              className={styles.button_image}
            />
          </div>
          <div
            className={styles.button}
            onClick={goToNext}
          >
            <img
              src={buttonRight}
              alt="next slide"
              className={styles.button_image}
            />
          </div>
        </div>
      </div>

      <div className={styles.slider}>
        <Slider ref={slider} {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>
      </div>


    </div>
  );
};

