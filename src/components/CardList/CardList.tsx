import React, { useEffect, useState } from 'react';
import styles from './CardList.module.scss';
import { cardData } from '../../common/cardData';
import Card from '../Card';
import { useAppSelector } from '../../hooks/hooks';
import { getCard } from '../../utils/utils';
import { ICard } from '../../types/types';

const CardList = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const difficulty = useAppSelector((state) => state.user.difficulty);
  useEffect(() => {
    setCards(getCard(difficulty));
  }, []);
  return (
    <ul className={styles.gameArea}>
      {}
      {cards.map((card) => (
        <li key={card.id}>
          <Card {...card} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
