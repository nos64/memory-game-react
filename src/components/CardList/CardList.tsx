import React, { useEffect, useState } from 'react';
import styles from './CardList.module.scss';
// import Card from '../Card';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/routes';
import { ICard } from '../../types/types';
import { useAppDispatch } from './../../hooks/hooks';
import {
  changeMovesCounter,
  incrementCounterMatch,
  setFirstCard,
  setSecondCard,
} from '../../store/reducers/gameSlice';

const CardList = () => {
  const cardList = useAppSelector((state) => state.game.cardList);
  const firstCard = useAppSelector((state) => state.game.firstCard);
  const secondCard = useAppSelector((state) => state.game.secondCard);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [cardsArray, setCardsArray] = useState<ICard[]>([]);
  // const [firstCard, setFirstCard] = useState<ICard | null>(null);
  // const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [lockBoard, setLockBoard] = useState(false);

  useEffect(() => {
    if (cardList.length === 0) {
      navigate(`${ROUTES.START}`);
    }
    const gameArray = cardList.map((card, index) => ({ ...card, index: index }));
    setCardsArray(gameArray);
  }, []);

  const handleClickCard = (index: number) => {
    if (lockBoard) return;
    if (index === firstCard?.index) {
      return;
    }
    const newCardArray = cardsArray.map((card, i) =>
      index === i ? { ...card, isFliped: true } : { ...card }
    );
    setCardsArray(newCardArray);
    if (!firstCard) {
      const first = cardsArray.find((card, i) => i === index);
      if (first) {
        dispatch(setFirstCard(first));
        return;
      }
    }
    const second = cardsArray.find((card, i) => card !== firstCard && i === index);
    if (second) {
      dispatch(setSecondCard(second));
    }
  };

  useEffect(() => {
    if (secondCard) {
      checkForMatch();
    }
  }, [secondCard]);

  const checkForMatch = () => {
    dispatch(changeMovesCounter(1));
    if (firstCard !== null && secondCard !== null && firstCard?.id === secondCard?.id) {
      const modifyCards = cardsArray.map((card) =>
        card.isFliped ? { ...card, isFliped: true, isBlocked: true } : { ...card }
      );
      setCardsArray(modifyCards);
      resetBoard();
      console.log('done');
      dispatch(incrementCounterMatch(1));
    } else {
      unflipCards();
    }
  };

  const unflipCards = () => {
    setLockBoard(true);
    setTimeout(() => {
      const thirdClickArray = cardsArray.map((card) =>
        card.isBlocked ? { ...card } : { ...card, isFliped: false }
      );
      setCardsArray(thirdClickArray);
      resetBoard();
    }, 1000);
  };

  const resetBoard = () => {
    setLockBoard(false);
    dispatch(setFirstCard(null));
    dispatch(setSecondCard(null));
  };

  return (
    <ul className={styles.gameArea}>
      {cardsArray.map((card, index) => (
        <li
          key={card.id + index}
          className={card.isBlocked ? styles.noClick : ''}
          onClick={() => handleClickCard(index)}
        >
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
