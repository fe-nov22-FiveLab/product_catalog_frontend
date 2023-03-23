import React from 'react';
import { Developer } from '../../@types/Developer';

import styles from './ContactCard.module.scss';

import telegramLogo from '../../assets/img/icons/telegram-1.svg';
import githubLogo from '../../assets/img/icons/github.svg';
import linkedinLogo from '../../assets/img/icons/linkedin.svg';

interface Props {
  developers: Developer[];
}

export const ContactCard: React.FC<Props>= ({developers}) => (
  <>
    {developers.map(developer => {
      const {
        name,
        avatar,
        telegram,
        linkedin,
        github
      } = developer;

      return (
        <div key={name} className={styles.card}>
          <img
            src={avatar}
            alt="avatar"
            className={styles.avatar}
          />

          <div className={styles.name}>{name}</div>

          <div className={styles.position}>Developer</div>

          <div className={styles.links}>
            <a
              className={styles.link}
              href={`${github}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="GitHub" />
            </a>
            <a
              className={styles.link}
              href={`${linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a
              className={styles.link}
              href={`${telegram}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.telegram}
                src={telegramLogo}
                alt="Telegram"
              />
            </a>
          </div>
        </div>
      );
    })}
  </>
);
