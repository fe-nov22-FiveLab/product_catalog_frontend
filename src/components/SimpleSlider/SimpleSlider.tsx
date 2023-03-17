import React, { useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from '../../assets/img/Banner.png';

interface Props {
  prevSlide: boolean;
  nextSlide: boolean;
}

export const SimpleSlider: React.FC<Props> = ({ prevSlide, nextSlide }) => {

  const slider = React.useRef<Slider>(null);

  useEffect(() => {
    goToPrev();
  }, [prevSlide]);

  useEffect(() => {
    goToNext();
  }, [nextSlide]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <>
      <Slider ref={slider} {...settings}>
        <div>
          <img src={banner} alt="banner" />
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </Slider>
    </>
  );
};

