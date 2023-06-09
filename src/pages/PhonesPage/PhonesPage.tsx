import React, { useEffect, useState } from 'react';
import styles from './PhonesPage.module.scss';
import { Catalog } from '../../components/Catalog';
import { PhonesFilter } from '../../components/PhonesFilter';
import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../utils/fetchData';
import { Phone } from '../../@types/Phone';
import { useLocation } from 'react-router-dom';
import { PhonesSearch } from '../../components/PhonesSearch';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).toString();

  useEffect(() => {
    const loadPhonesData = async () => {
      try {
        setIsLoading(true);
        const phonesData = await getPhones(searchParams);
        setPhones(phonesData.phones);
        setTotal(phonesData.total);
      } catch {
        setHasLoadingError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadPhonesData();
  }, [location.search]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mobile phones</h1>
      <p className={styles.amount}>{total} models</p>
      <div className={styles.filters}>
        <div>
          <PhonesFilter />
        </div>
        <div className={styles.filters__search}>
          <PhonesSearch />
        </div>
      </div>
      {hasLoadingError ? (
        <p className={styles.error}>Can&apos;t load data from server</p>
      ) : (
        <>
          <Catalog phones={phones} isLoading={isLoading} />
          <Pagination total={total} />
        </>
      )}
    </div>
  );
};
