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
  // const firstCard = useAppSelector((state) => state.game.firstCard);
  // const secondCard = useAppSelector((state) => state.game.secondCard);
  const counterMatch = useAppSelector((state) => state.game.counterMatch);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [cardsArray, setCardsArray] = useState<ICard[]>([]);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [hasFlipedCard, setHasFlipedCard] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!cardList.length) {
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
    if (!hasFlipedCard) {
      setHasFlipedCard(true);
      const first = cardsArray.find((card, i) => i === index);
      if (first) {
        // dispatch(setFirstCard(first));
        setFirstCard(first);
        return;
      }
    }
    const second = cardsArray.find((card, i) => i === index);
    if (second) {
      // dispatch(setSecondCard(second));
      setSecondCard(second);
      // checkForMatch();
      // dispatch(changeMovesCounter(1));
      // checkWin();
    }
  };

  useEffect(() => {
    if (secondCard) {
      checkForMatch();
      dispatch(changeMovesCounter(1));
    }
  }, [secondCard]);

  useEffect(() => {
    checkWin();
  }, [counter]);

  const checkForMatch = () => {
    if (firstCard?.id === secondCard?.id) {
      // dispatch(incrementCounterMatch(1));
      setCounter((counter) => (counter += 1));
      const modifyCards = cardsArray.map((card) =>
        card.isFliped ? { ...card, isFliped: true, isBlocked: true } : { ...card }
      );
      setCardsArray(modifyCards);
      resetBoard();
      // console.log('counterMatch: ', counterMatch);
    } else {
      unflipCards();
    }
  };
  const checkWin = () => {
    if (counter === cardsArray.length / 2) {
      console.log('finish');
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
    setHasFlipedCard(false);
    // dispatch(setFirstCard(null));
    // dispatch(setSecondCard(null));
    setFirstCard(null);
    setSecondCard(null);
  };

  return (
    <ul className={styles.gameArea}>
      {cardsArray.map((card, index) => (
        <li
          key={card.id + index}
          className={card.isBlocked ? styles.noClick : ''}
          onClick={() => handleClickCard(index)}
        >
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
