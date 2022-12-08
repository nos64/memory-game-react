import React, { useEffect, useState } from 'react';
import styles from './CardList.module.scss';
import Card from '../Card';
import { useAppSelector } from '../../hooks/hooks';
import { ICard } from '../../types/types';

const CardList = () => {
  const cardList = useAppSelector((state) => state.user.cardList);
  const [cards, setCards] = useState<ICard[]>([]);
  // useEffect(() => {
  //   setCards(cardList || JSON.parse(localStorage.getItem('activeItem') as string)
  // }, [])
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
