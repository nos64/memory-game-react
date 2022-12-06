import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container';
import styles from './Layout.module.scss';
import Footer from '../Footer';
import Header from '../Header';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
