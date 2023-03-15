import React from "react";
import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <div className={styles.container}>
    <footer className={styles.footer}>
      <div className={styles.footer_logo}>
        <p className={styles.footer_logo_title}>
          nice gadgets
        </p>
        <img
          className={styles.footer_logo}
          src="./img/icons/logo_ok.png"
          alt="logo nice gadgets"
        />
      </div>
      <ul className={styles.footer_list}>
        <li className={styles.footer_item}>
          <a
            href="/github"
            className={styles.footer_link}
          >
           github
          </a>
        </li>
        <li className={styles.footer_item}>
          <a
            href="/contacts"
            className={styles.footer_link}
          >
            contacts
          </a>
    
          </li>
    
          <li className={styles.footer_item}>
            <a
              href="/rights"
              className={styles.footer_link}
            >
              rights
            </a>
          </li>
      </ul>
      <div className={styles.footer_top_item}>
        <p className={styles.footer_top_title}>Back to top</p>
        <div className={styles.footer_button_top}>
          <img
            src="./img/icons/arrow-top.svg"
            alt="back to top"
            className={styles.footer_arrow_top}
          />
        </div>
      </div>
    </footer>
  </div>
)