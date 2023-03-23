import React from 'react';
import { ContactCard } from '../../components/ContactCard';

import styles from './ContactsPage.module.scss';

export const ContactsPage: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.cards}>
      {/* <div className={styles.cards_33}> */}
      <ContactCard
        name='Bogdan Ilin'
        avatar='bogdan'/>

      <ContactCard
        name='Anastasiia Khudych'
        avatar='anastasiia'/>
      {/* </div> */}

      <ContactCard
        name='Victor Ionov'
        avatar='viktor'/>
    </div>

    <div className={styles.cards}>
      <ContactCard
        name='Yuliia Andrieieva'
        avatar='yuliia'/>

      <ContactCard
        name='Andrii Berezyanskii'
        avatar='andrii'/>
    </div>
  </div>
);
