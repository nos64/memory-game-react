import Container from '../Container';
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <h3 className={styles.headerTitle}>AVENGERS - MEMORY GAME</h3>
      </Container>
    </header>
  );
};

export default Header;
