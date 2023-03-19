import React from 'react';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import { useSearchParams } from 'react-router-dom';
import { SearchLink } from '../SearchLink';
import { countNumberOfPages } from '../../utils/countNumberOfPages';

type Props = {
  total: number;
};

export const Pagination: React.FC<Props> = ({ total }) => {
  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || null;
  const page = searchParams.get('page') || '1';

  const pageLinkCount = Math.ceil(total / (Number(perPage) || total));
  const pageLinkData = countNumberOfPages(pageLinkCount);

  const isFirstPage = page === '1';
  const isLastPage = Number(page) === pageLinkCount;

  return pageLinkData.length > 1 ? (
    <ul className={styles.pagination}>
      <li
        className={classNames(
          styles.pagination__item,
          styles['pagination__item-arrow-left'],
          {
            [styles['pagination__item-arrow-left-disabled']]: isFirstPage,
          },
        )}
      >
        <SearchLink
          className={styles['pagination__item-link']}
          params={{
            page: +page - 1 === 1 || +page === 1 ? null : `${+page - 1}`,
          }}
        />
      </li>

      {pageLinkData.map((pageLink) => (
        <li
          className={classNames(styles.pagination__item, {
            [styles.active]: Number(page) === pageLink,
          })}
          key={pageLink}
        >
          <SearchLink
            className={classNames(styles['pagination__item-link'], {
              [styles.active]: Number(page) === pageLink,
            })}
            params={{
              page: pageLink === 1 ? null : pageLink.toString(),
            }}
          >
            {pageLink}
          </SearchLink>
        </li>
      ))}

      <li
        className={classNames(
          styles.pagination__item,
          styles['pagination__item-arrow-right'],
          {
            [styles['pagination__item-arrow-right-disabled']]: isLastPage,
          },
        )}
      >
        <SearchLink
          className={styles['pagination__item-link']}
          params={{
            page: +page === pageLinkCount ? page : `${+page + 1}`,
          }}
        />
      </li>
    </ul>
  ) : null;
};
