import React from 'react';
import { useNavigate } from 'react-router-dom';

import ModalWrapper from '../ModalWrapper';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ROUTES } from '../../common/routes';
import {
  resetMovesCounter,
  setCardList,
  setUserDifficulty,
  togglePausedTimer,
  setGameStart,
  setMinutes,
  setSeconds,
  setSecondsStr,
  setMinutesStr,
} from '../../store/reducers/gameSlice';

import styles from './FinalModal.module.scss';

interface IFinalModalProps {
  isFinishModalOpen: boolean;
  setIsFinishModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinalModal: React.FC<IFinalModalProps> = ({ isFinishModalOpen, setIsFinishModalOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const secondsStr = useAppSelector((state) => state.game.secondsStr);
  const minutesStr = useAppSelector((state) => state.game.minutesStr);
  const moves = useAppSelector((state) => state.game.moves);

  const handleCloseModal = () => {
    setIsFinishModalOpen(false);
  };

  const handleNewGameButtonClick = () => {
    dispatch(setUserDifficulty(''));
    dispatch(setCardList(''));
    dispatch(resetMovesCounter());
    dispatch(togglePausedTimer(false));
    dispatch(setGameStart(false));
    dispatch(setMinutes(0));
    dispatch(setSeconds(0));
    dispatch(setSecondsStr('00'));
    dispatch(setMinutesStr('00'));
    navigate(`${ROUTES.START}`);
  };

  return (
    <ModalWrapper modalActive={isFinishModalOpen} setModalActive={handleCloseModal}>
      <div className={styles.finalWrapper}>
        <h2 className={styles.finalTitle}>Congratulations!</h2>
        <p className={styles.finalText}>You Win!</p>
        <p className={styles.finalText}>
          Time to complete:{' '}
          <span className={styles.finalTextValue}>
            {minutesStr} min and {secondsStr} sec
          </span>
        </p>
        <p className={styles.finalText}>
          Moves taken: <span className={styles.finalTextValue}>{moves}</span>
        </p>
        <div className={styles.finalBtnsWrapper}>
          <button className={styles.finalBtn} onClick={handleNewGameButtonClick}>
            Play Again?
          </button>
          <button className={styles.finalBtn} onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default FinalModal;
