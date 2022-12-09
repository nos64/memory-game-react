import React, { useState } from 'react';
import styles from './ScorePanel.module.scss';
import ResetGameModal from './ResetGameModal';
import ResultsModal from './ResultsModal';
import Timer from './Timer';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { togglePausedTimer } from '../../store/reducers/gameSlice';
import PlayerName from './PlayerName';
import Difficulty from './Difficulty';
import MovesCounter from './MovesCounter';

const ScorePanel = () => {
  const [isResetModalActive, setIsResetModalActive] = useState(false);
  const [isResultsModalActive, setIsResultsModalActive] = useState(false);
  const difficulty = useAppSelector((state) => state.game.difficulty);
  const dispatch = useAppDispatch();

  const handleResetButtonClick = () => {
    setIsResetModalActive(true);
    dispatch(togglePausedTimer(true));
  };

  const handleResultsButtonClick = () => {
    setIsResultsModalActive(true);
    dispatch(togglePausedTimer(true));
  };

  return (
    <>
      <div className={styles.resultsPanel}>
        <PlayerName />
        <Difficulty />
        <MovesCounter />
        <Timer />
        <button className={styles.panelButton} type="button" onClick={handleResetButtonClick}>
          Reset
        </button>
        <button className={styles.panelButton} type="button" onClick={handleResultsButtonClick}>
          Results
        </button>
      </div>
      <ResetGameModal
        isResetModalActive={isResetModalActive}
        setIsResetModalActive={setIsResetModalActive}
      />
      <ResultsModal
        isResultsModalActive={isResultsModalActive}
        setIsResultsModalActive={setIsResultsModalActive}
      />
    </>
  );
};

export default ScorePanel;
