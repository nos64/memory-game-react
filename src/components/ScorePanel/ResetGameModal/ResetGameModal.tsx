import React from 'react';

import ModalWrapper from '../../ModalWrapper';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  setCardList,
  togglePausedTimer,
  resetMovesCounter,
  setMinutes,
  setSeconds,
  setSecondsStr,
  setMinutesStr,
  setGameStart,
} from '../../../store/reducers/gameSlice';

import styles from './ResetGameModal.module.scss';

interface IResetGameModal {
  isResetModalActive: boolean;
  setIsResetModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetGameModal: React.FC<IResetGameModal> = ({
  isResetModalActive,
  setIsResetModalActive,
}) => {
  const dispatch = useAppDispatch();
  const difficulty = useAppSelector((state) => state.game.difficulty);

  const handleCloseModal = () => {
    setIsResetModalActive(false);
    dispatch(togglePausedTimer(false));
  };

  const handleResetButtonClick = () => {
    dispatch(setMinutes(0));
    dispatch(setSeconds(0));
    dispatch(setSecondsStr('00'));
    dispatch(setMinutesStr('00'));
    dispatch(setCardList(difficulty));
    dispatch(resetMovesCounter());
    dispatch(togglePausedTimer(false));
    dispatch(setGameStart(true));
    setIsResetModalActive(false);
  };

  return (
    <ModalWrapper modalActive={isResetModalActive} setModalActive={handleCloseModal}>
      <div className={styles.resetWrapper}>
        <p className={styles.resetText}>Are you sure?</p>
        <p className={styles.resetText}>Your progress will be Lost!</p>
        <div className={styles.resetBtnsWrapper}>
          <button className={styles.resetBtn} onClick={handleResetButtonClick}>
            Yes, Restart Game!
          </button>
          <button className={styles.resetBtn} onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ResetGameModal;
