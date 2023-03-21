import React, { useState } from 'react';
import Slider from 'react-slick';
import cn from 'classnames';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SimpleSlider.module.scss';

import banner from '../../assets/img/Banner.png';
import buttonLeft from '../../assets/img/icons/arrow-left-small.svg';
import buttonRight from '../../assets/img/icons/arrow-right-small.svg';

const SampleNextArrow = () => {
  // const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...styles, display: 'block', background: 'red' }}
      // onClick={onClick}
    />
  );
};

const SamplePrevArrow = () => {
  // const { className, style, onClick } = props;
  return (
    <div
      // className={styles.prevArrow}
      // style={{ background: 'red' }}
      // onClick={onClick}
    />
  );
};

export const SimpleSlider: React.FC = () => {

  const slider = React.useRef<Slider>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // arrows: true,
    beforeChange: (prev: number, next: number) => {
      setCurrentSlide(next);
    },
    appendDots: (dots:  number[] )  => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={styles.dots_list}
      >
        {<div className={cn(
          styles.dots,
          { [styles.dots_active]: i === currentSlide }) }
        >
        </div>}
      </div>
    )
  };

  const goToNext = () => {
    slider?.current?.slickNext();
  };

  const goToPrev = () => {
    slider?.current?.slickPrev();
  };

  return (
    <div className={styles.container}>
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

      {/* <div className={styles.content}> */}
      {/* <SamplePrevArrow /> */}

      <Slider className={styles.content}
        // className='slick-initialized slick-slider'
        ref={slider} {...settings}>
        <div>
          <img
            src={banner}
            alt="banner"
            className={styles.image}
          />
        </div>
        <div>
          <img
            src={banner}
            alt="banner"
            className={styles.image}
          />
        </div>
        <div>
          <img
            src={banner}
            alt="banner"
            className={styles.image}
          />
        </div>
      </Slider>
      {/* </div> */}

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
  );
};

