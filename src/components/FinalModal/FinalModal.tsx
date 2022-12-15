import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import React from 'react';
import styles from './FinalModal.module.scss';
import { useNavigate } from 'react-router-dom';
import {
  resetMovesCounter,
  setCardList,
  setGameStart,
  setUserDifficulty,
  setUserName,
  togglePausedTimer,
} from '../../store/reducers/gameSlice';
import { ROUTES } from '../../common/routes';
import ModalWrapper from '../ModalWrapper';

interface IFinalModalProps {
  isFinishModalOpen: boolean;
  setIsFinishModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinalModal: React.FC<IFinalModalProps> = ({ isFinishModalOpen, setIsFinishModalOpen }) => {
  const dispatch = useAppDispatch();
  const secondsStr = useAppSelector((state) => state.game.secondsStr);
  const minutesStr = useAppSelector((state) => state.game.minutesStr);
  const navigate = useNavigate();
  const moves = useAppSelector((state) => state.game.moves);
  const handleCloseModal = () => {
    setIsFinishModalOpen(false);
  };

  const handleNewGameButtonClick = () => {
    dispatch(setUserName(''));
    dispatch(setUserDifficulty(''));
    dispatch(setCardList(''));
    dispatch(resetMovesCounter());
    dispatch(togglePausedTimer(false));
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