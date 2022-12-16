import React from 'react';
import Container from '../../components/Container';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/routes';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleHomeBtnClick = () => {
    navigate(ROUTES.START);
  };

  return (
    <Container>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}> Sorry, Page Not Found</p>
      <div className={styles.btnContainer}>
        <button className={styles.button} type="button" onClick={handleHomeBtnClick}>
          Go to Start
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
