import React from 'react';

import styles from './ContactCard.module.scss';

import telegramLogo from '../../assets/img/icons/telegram-1.svg';
import githubLogo from '../../assets/img/icons/github.svg';
import linkedinLogo from '../../assets/img/icons/linkedin.svg';
import anastasiia from '../../assets/img/names/anastasiia.jpg';
import andrii from '../../assets/img/names/andrii.jpg';
import bogdan from '../../assets/img/names/bogdan.jpg';
import viktor from '../../assets/img/names/viktor.jpg';
import yuliia from '../../assets/img/names/yuliia.jpg';
import defaultAvatar from '../../assets/img/names/default-avatar.jpg';

interface Props {
  name: string;
  avatar: string;
  // github: string;
  // linkedin: string;
  // telegram: string;
}

export const ContactCard: React.FC<Props> = ({
  name,
  avatar,
  // github,
  // linkedin,
  // telegram,
}) => (
  <div className={styles.card}>
    <img
      src={defaultAvatar}
      alt="avatar"
      className={styles.avatar}
    />

    <div className={styles.name}>{name}</div>

    <div className={styles.position}>Developer</div>

    <div className={styles.links}>
      <a className={styles.link} href="">
        <img src={githubLogo} alt="GitHub" />
      </a>
      <a className={styles.link} href="">
        <img src={linkedinLogo} alt="LinkedIn" />
      </a>
      <a className={styles.link} href="">
        <img className={styles.telegram} src={telegramLogo}  alt="Telegram" />
      </a>
    </div>
  </div>
);
