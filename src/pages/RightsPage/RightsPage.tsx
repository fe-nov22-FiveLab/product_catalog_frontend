import React from 'react';
import styles from './RightsPage.module.scss';

export const RightsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <h2 className={styles.first_text}>
        This page outlines the terms and conditions that apply to your use of
        our website. By accessing our website, you agree to comply with and be
        bound by these terms and conditions. If you do not agree to these terms,
        please do not use our website.
      </h2>
      <ol className={styles.text}>
        <li className={styles.li_text}>
          <b>Ownership and Use of Content</b>: All content on our website,
          including text, graphics, logos, images, videos, and software, is
          owned by us or our licensors and is protected by copyright and other
          intellectual property laws. You may use our content for your personal,
          non-commercial use only. Any other use, including reproduction,
          modification, distribution, or transmission of our content, is
          strictly prohibited.
        </li>

        <li className={styles.li_text}>
          <b>Trademarks</b>: All trademarks, service marks, trade names, and
          logos on our website are the property of their respective owners. You
          may not use any of our trademarks without our prior written consent.
        </li>

        <li className={styles.li_text}>
          <b>Links to Other Websites</b>: Our website may contain links to
          third-party websites that are not owned or controlled by us. We are
          not responsible for the content or privacy practices of these
          websites. We provide these links for your convenience only, and you
          access them at your own risk.
        </li>

        <li className={styles.li_text}>
          <b>Accuracy of Information</b>: While we strive to provide accurate
          and up-to-date information on this website, we make no guarantees
          about the completeness or accuracy of any content. We reserve the
          right to modify or remove any content on the website at any time
          without notice.
        </li>

        <li className={styles.li_text}>
          <b>Product Information</b>: The products offered on this website are
          subject to availability and may be discontinued at any time. We
          reserve the right to change the prices of our products without notice.
        </li>

        <li className={styles.li_text}>
          <b>Disclaimer of Liability</b>: We will not be liable for any damages
          or losses resulting from your use of this website or its contents. We
          make no guarantees about the security or reliability of this website,
          and we are not responsible for any viruses or other harmful code that
          may be transmitted through the website.
        </li>

        <li className={styles.li_text}>
          <b>Changes to Page Rights</b>: We reserve the right to modify these
          page rights at any time without notice. Your continued use of the
          website following any changes to the page rights constitutes your
          acceptance of those changes.
        </li>
      </ol>
    </div>
  );
};
