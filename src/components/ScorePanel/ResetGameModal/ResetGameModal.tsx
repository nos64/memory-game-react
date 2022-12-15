import ModalWrapper from '../../ModalWrapper';
import React from 'react';
import styles from './ResetGameModal.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../common/routes';
import {
  setUserName,
  setUserDifficulty,
  setCardList,
  setGameStart,
  togglePausedTimer,
  resetMovesCounter,
} from '../../../store/reducers/gameSlice';
import { useAppDispatch } from '../../../hooks/hooks';

interface IResetGameModal {
  isResetModalActive: boolean;
  setIsResetModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetGameModal: React.FC<IResetGameModal> = ({
  isResetModalActive,
  setIsResetModalActive,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsResetModalActive(false);
    dispatch(togglePausedTimer(false));
  };

  const handleResetButtonClick = () => {
    dispatch(setUserName(''));
    dispatch(setUserDifficulty(''));
    dispatch(setCardList(''));
    dispatch(resetMovesCounter());
    dispatch(setGameStart(false));
    dispatch(togglePausedTimer(false));
    navigate(`${ROUTES.START}`);
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
