import React, { useEffect, useState } from 'react';
import styles from './CardList.module.scss';
import Card from '../Card';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../common/routes';
import { ICard } from '../../types/types';
// import { setCardList } from 'store/reducers/gameSlice';
import { useAppDispatch } from './../../hooks/hooks';
import { changeMovesCounter, incrementCounterMatch } from '../../store/reducers/gameSlice';

const CardList = () => {
  const cardList = useAppSelector((state) => state.game.cardList);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [cardsArray, setCardsArray] = useState<ICard[]>([]);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [lockBoard, setLockBoard] = useState(false);

  useEffect(() => {
    if (cardList.length === 0) {
      navigate(`${ROUTES.START}`);
    }
    const gameArray = cardList.map((card, index) => ({ ...card, index: index }));
    setCardsArray(gameArray);
  }, [cardList, cardList.length, navigate]);

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
      const first = newCardArray.find((card, i) => i === index);
      if (first) {
        setFirstCard(first);
        return;
      }
    }
    const second = newCardArray.find((card, i) => card !== firstCard && i === index);
    if (second) setSecondCard(second);
    if (firstCard && secondCard) {
      checkForMatch();
    }
  };

  const checkForMatch = () => {
    dispatch(changeMovesCounter(1));
    if (firstCard?.id === secondCard?.id) {
      console.log('secondCard?.id: ', secondCard?.id);
      console.log('firstCard?.id: ', firstCard?.id);
      console.log('done');
      dispatch(incrementCounterMatch(1));
    } else {
      unflipCards();
    }
  };

  const unflipCards = () => {
    setLockBoard(true);
    setTimeout(() => {
      const thirdClickArray = cardsArray.map((card) => ({ ...card, isFliped: false }));
      setCardsArray(thirdClickArray);
      resetBoard();
    }, 1000);
  };

  const resetBoard = () => {
    setLockBoard(false);
    setFirstCard(null);
    setSecondCard(null);
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
