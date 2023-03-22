import React, { useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../styles/Swiper.scss';
import styles from './HomeSwiper.module.scss';

import banner from '../../assets/img/Banner.png';
import smallBanner from '../../assets/img/banner-320.png';
import banner_phones from '../../assets/img/banner-phones.png';
import smallBanner_phones from '../../assets/img/banner-phones-mobile.png';
import banner_tablets from '../../assets/img/banner-tablets.jpg';
import smallBanner_tablets from '../../assets/img/banner-tablets-mobile.jpg';
import buttonLeft from '../../assets/img/icons/arrow-left-small.svg';
import buttonRight from '../../assets/img/icons/arrow-right-small.svg';

export const HomeSwiper: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className={styles.home_slider}>
      <div className={styles.container}>
        <div
          className={styles.button}
          onClick={handlePrevious}
        >
          <img
            src={buttonLeft}
            alt="prev slide"
            className={styles.button_image}
          />
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          pagination= {{
            clickable: true,
            el: '.swiper-custom-pagination',
          }}
          onSwiper={setSwiperRef}
          onSlideChange={() => console.log('slide change')}
          loop
          observeParents
          observer
        >
          <SwiperSlide>
            <Link className={styles.link} to="/phones">
              <picture className='image' >
                <source className='image' srcSet={banner} media="(min-width: 640px)" />
                <img className='image' src={smallBanner} />
              </picture>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className={styles.link} to="/phones">
              <picture className='image' >
                <source className='image' srcSet={banner_phones} media="(min-width: 640px)" />
                <img className='image' src={smallBanner_phones} />
              </picture>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link className={styles.link} to="/tablets">
              <picture className='image' >
                <source className='image' srcSet={banner_tablets} media="(min-width: 640px)" />
                <img className='image' src={smallBanner_tablets} />
              </picture>
            </Link>
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
    </div>
  );
};
