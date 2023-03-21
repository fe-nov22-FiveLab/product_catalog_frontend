import React from 'react';
import { CowGame } from '@gnosis.pm/cow-runner-game';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>😔 404 Page not found</h1>
      <br></br>
      <p className={styles.text}>Let&apos;s play cow game</p>
      <p className={styles.text}>Try not to get 🥪</p>
      <br></br>

      <CowGame />

      <div className={styles.button_container}>
        <Link to='/'>
          <button className={styles.button_back}>Back to home</button>
        </Link>
      </div>
    </div>
  );
};

