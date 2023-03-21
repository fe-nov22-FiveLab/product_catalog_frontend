import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import styles from './PhonesSwiper.module.scss';

import '../../styles/Swiper.scss';

import buttonLeft from '../../assets/img/icons/arrow-left-small.svg';
import buttonRight from '../../assets/img/icons/arrow-right-small.svg';
import { getPhones } from '../../utils/fetchData';
import { Phone } from '../../@types/Phone';
import { Card } from '../Card/Card';
import { Loader } from '../Loader';

interface Props  {
  title: string;
  sort: string;
}

export const PhonesSwiper: React.FC<Props> = ({ title, sort }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBrandNewPhones = async () => {
      try {
        setIsLoading(true);
        const phonesData = await getPhones(`perPage=10&sort=${sort}`);

        setPhones(phonesData.phones);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getBrandNewPhones();
  }, []);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
    console.log('previous');
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className={styles.phones_slider}>
      <div className={styles.top_panel}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.buttons}>
          <div className={styles.button} onClick={handlePrevious}>
            <img
              src={buttonLeft}
              alt="prev slide"
              className={styles.button_image}
            />
          </div>
          <div className={styles.button} onClick={handleNext}>
            <img
              src={buttonRight}
              alt="next slide"
              className={styles.button_image}
            />
          </div>
        </div>
      </div>

      <div className={styles.swiper_container}>
        <Swiper
          modules={[ Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={16}
          slidesPerView={4}
          onSwiper={setSwiperRef}
          onSlideChange={() => console.log('slide change')}
          loop
        >
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => (
              <SwiperSlide key={i}>
                <Loader />
              </SwiperSlide> ))
            : phones.map((phone) => (
              <SwiperSlide key={phone.id}>
                <Card phone={phone} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};
