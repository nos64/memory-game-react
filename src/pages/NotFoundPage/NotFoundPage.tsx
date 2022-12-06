import Container from '../../components/Container';
import React from 'react';
import styles from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/routes';

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
          Go Start
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
