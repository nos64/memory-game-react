import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FinalModal from '../FinalModal';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { saveInStorage } from '../../utils/utils';
import { ROUTES } from '../../common/routes';
import { ICard } from '../../types/types';
import {
  changeMovesCounter,
  setGameStart,
  togglePausedTimer,
} from '../../store/reducers/gameSlice';

import styles from './CardList.module.scss';

const CardList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [cardsArray, setCardsArray] = useState<ICard[]>([]);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [hasFlipedCard, setHasFlipedCard] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);

  const cardList = useAppSelector((state) => state.game.cardList);
  const playerName = useAppSelector((state) => state.game.playerName);
  const difficulty = useAppSelector((state) => state.game.difficulty);
  const secondsStr = useAppSelector((state) => state.game.secondsStr);
  const minutesStr = useAppSelector((state) => state.game.minutesStr);
  const moves = useAppSelector((state) => state.game.moves);

  useEffect(() => {
    if (!cardList.length) {
      navigate(`${ROUTES.START}`);
    }
    const gameArray = cardList.map((card, index) => ({ ...card, index: index }));
    setCardsArray(gameArray);
    setFirstCard(null);
    setSecondCard(null);
    setHasFlipedCard(false);
    setCounter(0);
  }, [cardList]);

  const handleClickCard = (index: number) => {
    if (lockBoard) return;
    if (index === firstCard?.index) {
      return;
    }
    const modifyCardArray = cardsArray.map((card, i) =>
      index === i ? { ...card, isFliped: true } : { ...card }
    );
    setCardsArray(modifyCardArray);
    if (!hasFlipedCard) {
      setHasFlipedCard(true);
      const first = cardsArray.find((card, i) => i === index);
      first && setFirstCard(first);
      return;
    }
    const second = cardsArray.find((card, i) => i === index);
    second && setSecondCard(second);
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
      setCounter((counter) => (counter += 1));
      const modifyCards = cardsArray.map((card) =>
        card.isFliped ? { ...card, isFliped: true, isBlocked: true } : { ...card }
      );
      setCardsArray(modifyCards);
      resetBoard();
    } else {
      unflipCards();
    }
  };

  const checkWin = () => {
    if (counter && cardsArray.length && counter === cardsArray.length / 2) {
      dispatch(setGameStart(false));
      dispatch(togglePausedTimer(true));
      setIsFinishModalOpen(true);
      saveInStorage({ playerName, difficulty, minutesStr, secondsStr, moves });
    }
  };

  const unflipCards = () => {
    setLockBoard(true);
    setTimeout(() => {
      const unflipedArray = cardsArray.map((card) =>
        card.isBlocked ? { ...card } : { ...card, isFliped: false }
      );
      setCardsArray(unflipedArray);
      resetBoard();
    }, 1000);
  };

  const resetBoard = () => {
    setLockBoard(false);
    setHasFlipedCard(false);
    setFirstCard(null);
    setSecondCard(null);
  };

  return (
    <>
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
      <FinalModal
        isFinishModalOpen={isFinishModalOpen}
        setIsFinishModalOpen={setIsFinishModalOpen}
      />
    </>
  );
};

export default CardList;
