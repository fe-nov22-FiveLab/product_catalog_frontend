import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './PhonesFilter.module.scss';
import { SearchLink } from '../SearchLink';

export const PhonesFilter: React.FC = () => {
  const [isSortSelectActive, setIsSortSelectActive] = useState(false);
  const [isPageSelectActive, setIsPageSelectActive] = useState(false);

  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const pageDropdownRef = useRef<HTMLDivElement>(null);

  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || null;
  const sort = searchParams.get('sort') || null;

  const sortOptions = [
    {
      title: 'Newest',
      value: 'year',
    },
    {
      title: 'Alphabetically',
      value: 'name',
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

  if (sort === 'name') {
    sortTitle = 'Alphabetically';
  }

  if (sort === 'year') {
    sortTitle = 'Newest';
  }

  if (sort === 'price') {
    sortTitle = 'Cheapest';
  }

  useEffect(() => {
    function handleClickOutsideSortFilter(event: MouseEvent) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target as HTMLElement)
      ) {
        setIsSortSelectActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideSortFilter);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSortFilter);
    };
  }, [sortDropdownRef]);

  useEffect(() => {
    function handleClickOutsidePageFilter(event: MouseEvent) {
      if (
        pageDropdownRef.current &&
        !pageDropdownRef.current.contains(event.target as HTMLElement)
      ) {
        setIsPageSelectActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutsidePageFilter);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsidePageFilter);
    };
  }, [pageDropdownRef]);

  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-container__sort']}>
        <p className={styles['filter-container__title']}>Sort by</p>

        <div className={styles.dropdown} ref={sortDropdownRef}>
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

        <div
          className={`${styles.dropdown} ${styles['dropdown-page']}`}
          ref={pageDropdownRef}
        >
          <div
            className={styles.dropdown__btn}
            onClick={() => setIsPageSelectActive(!isPageSelectActive)}
          >
            {!perPage || !['4', '8', '16'].includes(perPage) ? 'all' : perPage}
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
                      page: null,
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
