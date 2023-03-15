import React from 'react';
import styles from './Footer.module.scss';
// import logo from '../../../public/img/icons/logo.svg';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <footer className={styles.footer}>
        <img
          className={styles.footer_logo}
          src="img/icons/logo.svg"
          alt="logo nice gadgets"
        />

        <ul className={styles.footer_list}>
          <li className={styles.footer_item}>
            <Link to={'/github'} className={styles.footer_link}>
              github
            </Link>
          </li>

          <li className={styles.footer_item}>
            <Link to={'/contacts'} className={styles.footer_link}>
              contacts
            </Link>
          </li>

          <li className={styles.footer_item}>
            <Link to={'/rights'} className={styles.footer_link}>
              rights
            </Link>
          </li>
        </ul>

        <div className={styles.footer_top_button}>
          <p className={styles.footer_top_title}>Back to top</p>

          <Link to={'#'} className={styles.footer_arrow_up}></Link>
        </div>
      </footer>
    </div>
  </div>
);
