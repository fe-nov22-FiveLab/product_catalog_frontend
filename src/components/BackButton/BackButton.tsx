import React from 'react';
import { useNavigate } from 'react-router';
import arrowBack from '../../assets/img/icons/arrow-back.svg';
import styles from './BackButton.module.scss';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.button} onClick={goBack}>
      <img className={styles.button__image} src={arrowBack} alt="Back arrow" />
      <span className={styles.button__text}>Back</span>
    </div>
  );
};
