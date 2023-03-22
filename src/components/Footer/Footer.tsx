import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/img/icons/logo.svg';
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
            onClick={goToTop}
          />

          <ul className={styles.footer_list}>
            <li className={styles.footer_item}>
              <a
                href="https://github.com/fe-nov22-FiveLab/product_catalog_frontend"
                className={styles.footer_link}
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </li>

            <li className={styles.footer_item}>
              <a
                href="https://github.com/fe-nov22-FiveLab/product_catalog_frontend"
                className={styles.footer_link}
                target="_blank"
                rel="noreferrer"
              >
                contacts
              </a>
            </li>

            <li className={styles.footer_item}>
              <Link to="/rights">
                <div className={styles.footer_link}>rights</div>
              </Link>
            </li>
          </ul>

          <div className={styles.footer_top_button}>
            <label className={styles.footer_top_title} htmlFor="back-to-top">
              Back to top
            </label>

            <button
              type="button"
              className={styles.footer_arrow_up}
              id="back-to-top"
              onClick={goToTop}
            ></button>
          </div>
        </footer>
      </div>
    </div>
  );
};
