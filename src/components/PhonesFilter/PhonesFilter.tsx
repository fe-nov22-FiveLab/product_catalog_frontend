import classNames from 'classnames';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './PhonesFilter.module.scss';
import { SearchLink } from '../SearchLink';

export const PhonesFilter: React.FC = () => {
  const [isSortSelectActive, setIsSortSelectActive] = useState(false);
  const [isPageSelectActive, setIsPageSelectActive] = useState(false);

  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || null;
  const sort = searchParams.get('sort') || null;

  const sortOptions = [
    {
      title: 'Newest',
      value: 'age',
    },
    {
      title: 'Alphabetically',
      value: 'title',
    },
    {
      title: 'Cheapest',
      value: 'price',
    },
  ];

  const pageOptions = [
    {
      title: '4',
      value: '4',
    },
    {
      title: '8',
      value: '8',
    },
    {
      title: '16',
      value: '16',
    },
    {
      title: 'all',
      value: null,
    },
  ];

  let sortTitle;

  if (sort === 'title') {
    sortTitle = 'Alphabetically';
  }

  if (sort === 'age') {
    sortTitle = 'Newest';
  }

  if (sort === 'price') {
    sortTitle = 'Cheapest';
  }

  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-container__sort']}>
        <p className={styles['filter-container__title']}>Sort by</p>

        <div className={styles.dropdown}>
          <div
            className={styles.dropdown__btn}
            onClick={() => setIsSortSelectActive(!isSortSelectActive)}
          >
            {sortTitle || 'Choose one'}
            <span
              className={classNames([styles.dropdown__arrow], {
                [styles.dropdown__arrow__active]: isSortSelectActive,
              })}
            ></span>
          </div>

          {isSortSelectActive && (
            <ul className={styles.dropdown__content}>
              {sortOptions.map(({ title, value }) => (
                <li
                  key={value}
                  className={classNames([styles.dropdown__item], {
                    [styles.dropdown__item__active]: sort === value,
                  })}
                  onClick={(event) => {
                    event.preventDefault();
                    setIsSortSelectActive(false);
                  }}
                >
                  <SearchLink
                    className={styles.dropdown__link}
                    params={{
                      sort: value,
                    }}
                  >
                    {title}
                  </SearchLink>
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
            {perPage || 'all'}
            <span
              className={classNames([styles.dropdown__arrow], {
                [styles.dropdown__arrow__active]: isPageSelectActive,
              })}
            ></span>
          </div>

          {isPageSelectActive && (
            <ul className={styles.dropdown__content}>
              {pageOptions.map(({ title, value }) => (
                <li
                  key={title}
                  className={classNames([styles.dropdown__item], {
                    [styles.dropdown__item__active]: perPage === value,
                  })}
                  onClick={(event) => {
                    event.preventDefault();
                    setIsPageSelectActive(false);
                  }}
                >
                  <SearchLink
                    className={styles.dropdown__link}
                    params={{
                      perPage: value,
                    }}
                  >
                    {title}
                  </SearchLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
