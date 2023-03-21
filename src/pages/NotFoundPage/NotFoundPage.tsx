import React from 'react';
import { CowGame } from '@gnosis.pm/cow-runner-game';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
  <div className={styles.container}>
    <h1>404 Page not found</h1>
    <br></br>
    <p>Let&apos;s play cow game</p>
    <p>Try not to get 🥪</p>

    <CowGame />
  </div>
);
