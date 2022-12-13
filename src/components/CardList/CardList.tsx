import React, { useEffect, useState } from 'react';
import styles from './CardList.module.scss';
import Card from '../Card';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/routes';
import { ICard } from '../../types/types';
// import { setCardList } from 'store/reducers/gameSlice';

const CardList = () => {
  const cardList = useAppSelector((state) => state.game.cardList);
  const navigate = useNavigate();
  const [cardsArray, setCardsArray] = useState(cardList);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [lockBoard, setLockBoard] = useState(false);

  useEffect(() => {
    if (cardList.length === 0) {
      navigate(`${ROUTES.START}`);
    }
  }, []);

  const handleClickCard = (index: number) => {
    if (lockBoard) return;
    const newCardArray = cardsArray.map((card, i) =>
      index === i ? { ...card, isFliped: true } : { ...card }
    );
    // setCardsArray(newCardArray);
    // const newCardArray = cardsArray.map((card, i) => {
    //   if (index === i && card === firstCard) return { ...card };
    //   if (index === i && !card.isFliped) {
    //     setFirstCard(card);
    //     console.log('first', firstCard);
    //     return { ...card, isFliped: true };
    //   }
    //   setSecondCard(card);
    //   console.log('second', secondCard);
    //   return { ...card, isFliped: true };
    // });
    // setCardsArray(newCardArray);

    if (firstCard === null && secondCard === null) {
      const first = newCardArray.find((card) => card.isFliped);
      if (first) {
        setFirstCard(first);
        console.log('first', firstCard);
      }
    }
    if (firstCard !== null && secondCard === null) {
      const second = newCardArray.find((card) => card.isFliped);
      if (second) {
        setSecondCard(second);
        console.log('second', secondCard);
      }
    }
    if (firstCard && secondCard) {
      setFirstCard(null);
      setSecondCard(null);
      // const thirdClickArray = cardsArray.map((card) => { ...card, isFliped: false })
    }
    setCardsArray(newCardArray);
  };

  return (
    <ul className={styles.gameArea}>
      {cardsArray.map((card, index) => (
        <li key={card.id + index} onClick={() => handleClickCard(index)}>
          {/* <Card {...card} /> */}
          <div
            className={card.isFliped ? `${styles.memoryCard} ${styles.flip}` : styles.memoryCard}
          >
            <img className={styles.backFace} src={card.avers} alt="Hero" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
