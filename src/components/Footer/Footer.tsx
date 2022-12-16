import React from 'react';
import Container from '../Container';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <span>2022</span>
          <a
            className={styles.footerLink}
            target="_blank"
            href="https://github.com/nos64"
            rel="noreferrer"
          >
            github
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
