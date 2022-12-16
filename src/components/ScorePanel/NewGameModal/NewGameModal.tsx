import React from 'react';
import { useNavigate } from 'react-router-dom';

import ModalWrapper from '../../ModalWrapper';

import { useAppDispatch } from '../../../hooks/hooks';
import { ROUTES } from '../../../common/routes';
import {
  setGameStart,
  togglePausedTimer,
  resetMovesCounter,
  setMinutes,
  setSeconds,
  setCardList,
  setSecondsStr,
  setMinutesStr,
} from '../../../store/reducers/gameSlice';

import styles from './NewGameModal.module.scss';

interface INewGameModal {
  isNewGameActive: boolean;
  setIsNewGameActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewGameModal: React.FC<INewGameModal> = ({ isNewGameActive, setIsNewGameActive }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsNewGameActive(false);
    dispatch(togglePausedTimer(false));
  };

  const handleNewButtonClick = () => {
    dispatch(setCardList(''));
    dispatch(resetMovesCounter());
    dispatch(setGameStart(false));
    dispatch(togglePausedTimer(false));
    dispatch(setMinutes(0));
    dispatch(setSeconds(0));
    dispatch(setSecondsStr('00'));
    dispatch(setMinutesStr('00'));
    navigate(`${ROUTES.START}`);
  };

  return (
    <ModalWrapper modalActive={isNewGameActive} setModalActive={handleCloseModal}>
      <div className={styles.resetWrapper}>
        <p className={styles.resetText}>Are you sure?</p>
        <p className={styles.resetText}>Your progress will be Lost!</p>
        <div className={styles.resetBtnsWrapper}>
          <button className={styles.resetBtn} onClick={handleNewButtonClick}>
            Yes, New Game!
          </button>
          <button className={styles.resetBtn} onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default NewGameModal;
