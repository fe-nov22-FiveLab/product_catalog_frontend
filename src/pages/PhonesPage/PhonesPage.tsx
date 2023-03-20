import React, { useEffect, useState } from 'react';
import styles from './PhonesPage.module.scss';
import { Catalog } from '../../components/Catalog';
import { PhonesFilter } from '../../components/PhonesFilter';
import { Pagination } from '../../components/Pagination';
import { getPhones } from '../../utils/fetchData';
import { Phone } from '../../@types/Phone';
import { useLocation } from 'react-router-dom';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [total, setTotal] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).toString();

  useEffect(() => {
    const loadPhonesData = async () => {
      try {
        const phonesData = await getPhones(searchParams);
        setPhones(phonesData.phones);
        setTotal(phonesData.total);

        console.log(phonesData);
      } catch {
        setHasLoadingError(true);
      }
    };

    loadPhonesData();
  }, [location.search]);

  return (
    <>
      <h1 className={styles.title}>Mobile phones</h1>
      <PhonesFilter />
      {hasLoadingError ? (
        'Cannot load data from server'
      ) : (
        <Catalog phones={phones} />
      )}
      <Pagination total={total} />
    </>
  );
};
