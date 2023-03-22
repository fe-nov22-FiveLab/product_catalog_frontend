import React, { ChangeEvent, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import styles from './PhonesSearch.module.scss';
import debounce from 'lodash.debounce';

export const PhonesSearch: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const debouncedSetSearchParams = useCallback(
    debounce(setSearchParams, 1000),
    [],
  );

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);

    const normalizedValue = value.trim();

    const newSearchParams = getSearchWith(searchParams, {
      query: normalizedValue || null,
      page: null,
    });

    debouncedSetSearchParams(newSearchParams);
  };

  return (
    <div className={styles['input-container']}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search"
        value={query}
        onChange={onQueryChange}
      />
      <span className={styles['input-icon']}></span>
    </div>
  );
};
