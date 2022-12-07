import React from 'react';
import styles from './CardList.module.scss';
import { cardData } from '../../common/cardData';
import Card from '../Card';

const CardList = () => {
  return (
    <ul className={styles.gameArea}>
      {}
      {cardData.map((card) => (
        <li key={card.id}>
          <Card {...card} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
