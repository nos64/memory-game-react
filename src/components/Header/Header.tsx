import Container from '../Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.headerTitle}>AVENGERS - MEMORY GAME</h1>
      </Container>
    </header>
  );
};

export default Header;
