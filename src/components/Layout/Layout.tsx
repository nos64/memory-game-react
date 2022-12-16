import React from 'react';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

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
