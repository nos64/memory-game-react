import React, { useEffect } from 'react';
import styles from './CardList.module.scss';
import Card from '../Card';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/routes';

const CardList = () => {
  const cardList = useAppSelector((state) => state.user.cardList);
  const navigate = useNavigate();
  useEffect(() => {
    if (cardList.length === 0) {
      navigate(`${ROUTES.START}`);
    }
  }, []);

  return (
    <ul className={styles.gameArea}>
      {cardList.map((card, i) => (
        <li key={card.id + i}>
          <Card {...card} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
