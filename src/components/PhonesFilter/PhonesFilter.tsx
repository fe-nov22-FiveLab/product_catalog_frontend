import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './PhonesFilter.module.scss';

export const PhonesFilter: React.FC = () => {
  const [isSortSelectActive, setIsSortSelectActive] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [isPageSelectActive, setIsPageSelectActive] = useState(false);
  const [selectedPageQuantity, setSelectedPageQuantity] = useState('16');

  const sortOptions = ['Newest', 'Alphabetically', 'Cheapest'];

  const pageOptions = ['4', '8', '16', 'all'];

  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-container__sort']}>
        <p className={styles['filter-container__title']}>Sort by</p>

        <div className={styles.dropdown}>
          <div
            className={styles.dropdown__btn}
            onClick={() => setIsSortSelectActive(!isSortSelectActive)}
          >
            {selectedSort}
            <span
              className={classNames([styles.dropdown__arrow], {
                [styles.dropdown__arrow__active]: isSortSelectActive,
              })}
            ></span>
          </div>
          {isSortSelectActive && (
            <ul className={styles.dropdown__content}>
              {sortOptions.map((option) => (
                <li
                  key={option}
                  className={classNames([styles.dropdown__item], {
                    [styles.dropdown__item__active]: selectedSort === option,
                  })}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedSort(option);
                    setIsSortSelectActive(false);
                  }}
                >
                  <a className={styles.dropdown__link} href="">
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles['filter-container__page']}>
        <p className={styles['filter-container__title']}>Items on page</p>

        <div className={`${styles.dropdown} ${styles['dropdown-page']}`}>
          <div
            className={styles.dropdown__btn}
            onClick={() => setIsPageSelectActive(!isPageSelectActive)}
          >
            {selectedPageQuantity}
            <span
              className={classNames([styles.dropdown__arrow], {
                [styles.dropdown__arrow__active]: isPageSelectActive,
              })}
            ></span>
          </div>
          {isPageSelectActive && (
            <ul className={styles.dropdown__content}>
              {pageOptions.map((option) => (
                <li
                  key={option}
                  className={classNames([styles.dropdown__item], {
                    [styles.dropdown__item__active]:
                      selectedPageQuantity === option,
                  })}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedPageQuantity(option);
                    setIsPageSelectActive(false);
                  }}
                >
                  <a className={styles.dropdown__link} href="">
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
