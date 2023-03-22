import React from 'react';
import styles from './ShopByCategory.module.scss';
import { Link } from 'react-router-dom';
import phone from '../../assets/img/categories/phone-category.jpg';
import tablets from '../../assets/img/categories/tablet-category.jpg';
import accessories from '../../assets/img/categories/accessories-category.jpg';

export const ShopByCategory: React.FC = () => {
  return (
    <div className={styles.category}>
      <h2 className={styles.category__title}>Shop by category</h2>

      <div className={styles.category__container}>
        <div className={styles.category__item}>
          <Link className={styles.category__photo} to={'/phones'}>
            <img src={phone} alt="link to phones page" />
          </Link>
          <Link to={'/phones'} className={styles.category__subtitle}>
            Mobile phones
          </Link>
          <p className={styles.category__amount}>71 models</p>
        </div>

        <div className={styles.category__item}>
          <Link className={styles.category__photo} to={'/tablets'}>
            <img src={tablets} alt="link to tablets page" />
          </Link>
          <Link to={'/tablets'} className={styles.category__subtitle}>
            Tablets
          </Link>
          <p className={styles.category__amount}>0 models</p>
        </div>

        <div className={styles.category__item}>
          <Link className={styles.category__photo} to={'/accessories'}>
            <img src={accessories} alt="link to accessories page" />
          </Link>
          <Link to={'/accessories'} className={styles.category__subtitle}>
            Accessories
          </Link>
          <p className={styles.category__amount}>0 models</p>
        </div>
      </div>
    </div>
  );
};
