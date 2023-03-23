import React from 'react';
import { ContactCard } from '../../components/ContactCard';
import { Developer } from '../../@types/Developer';

import styles from './ContactsPage.module.scss';
import anastasiiaPhoto from '../../assets/img/names/anastasiia.jpg';
import andriiPhoto from '../../assets/img/names/andrii.jpg';
import bogdanPhoto from '../../assets/img/names/bogdan.jpg';
import viktorPhoto from '../../assets/img/names/viktor.jpg';
import yuliiaPhoto from '../../assets/img/names/yuliia.jpg';

const developers: Developer[] = [
  {name: 'Bogdan Ilin',
    avatar: bogdanPhoto,
    telegram: 'https://t.me/avichez',
    linkedin: 'https://www.linkedin.com/in/bogdan-ilin-98148411a/',
    github: 'https://github.com/Avichez',
  },
  {name: 'Anastasiia Khudych',
    avatar: anastasiiaPhoto,
    telegram: 'https://t.me/Anastasiia_Khudych',
    linkedin: 'https://www.linkedin.com/in/anastasiia-khudych-718949265/',
    github: 'https://github.com/Anastasiia-Khudych',
  },
  {name: 'Victor Ionov',
    avatar: viktorPhoto,
    telegram: 'https://t.me/VictorionovCVLRS',
    linkedin: 'https://www.linkedin.com/in/viktor-ionov-68625b77/',
    github: 'https://github.com/victorionov',
  },
  {name: 'Yuliia Andrieieva',
    avatar: yuliiaPhoto,
    telegram: 'https://t.me/andrieieva',
    linkedin: 'http://www.linkedin.com/in/andrieieva-y',
    github: 'https://github.com/andrieieva-yuliia',
  },
  {name: 'Andrii Berezyanskii',
    avatar: andriiPhoto,
    telegram: 'https://t.me/AndreyBerezyanskiy',
    linkedin: 'http://www.linkedin.com/in/andrii-berezianskii-6b5a14265',
    github: 'https://github.com/AndreyBerezyanskiy',
  },
];

export const ContactsPage: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.cards}>
      <ContactCard developers={developers} />
    </div>
  </div>
);
