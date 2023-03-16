import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <footer className={styles.footer}>
          <img
            className={styles.footer_logo}
            src={logo}
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
            <label
              className={styles.footer_top_title}
              htmlFor="back-to-top"
            >
              Back to top
            </label>

            <button type='button'
              className={styles.footer_arrow_up}
              id="back-to-top"
              onClick={goToTop}></button>
          </div>
        </footer>
      </div>
    </div>
  );
};

