import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './HomeSwiper.module.scss';

import '../../styles/HomeSiper.scss';
import banner from '../../assets/img/Banner.png';
import smallBanner from '../../assets/img/banner-320.png';
import buttonLeft from '../../assets/img/icons/arrow-left-small.svg';
import buttonRight from '../../assets/img/icons/arrow-right-small.svg';

export const HomeSwiper: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  // const theSlides = useMemo(()=> ['slide one', 'slide two'], []);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.button}
          onClick={handlePrevious}
        >
          <img
            src={buttonLeft}
            alt="prev slide"
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination= {{
            el: '.swiper-custom-pagination',
          }}
          onSwiper={setSwiperRef}
          onSlideChange={() => console.log('slide change')}
          loop
        >
          <SwiperSlide>
            <picture className='image' >
              <source className='image' srcSet={banner} media="(min-width: 640px)" />
              <img className='image' src={smallBanner} />
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <picture className='image' >
              <source className='image' srcSet={banner} media="(min-width: 640px)" />
              <img className='image' src={smallBanner} />
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <picture className='image' >
              <source className='image' srcSet={banner} media="(min-width: 640px)" />
              <img className='image' src={smallBanner} />
            </picture>
          </SwiperSlide>
        </Swiper>

        <div
          className={styles.button}
          onClick={handleNext}
        >
          <img
            src={buttonRight}
            alt="next slide"
            className={styles.button_image}
          />
        </div>
      </div>
      <div className="swiper-custom-pagination"/>
    </>
  );
};
