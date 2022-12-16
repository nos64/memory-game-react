import React, { useState } from 'react';
import PlayerName from './PlayerName';
import Difficulty from './Difficulty';
import MovesCounter from './MovesCounter';
import Timer from './Timer';
import ResetGameModal from './ResetGameModal';
import ResultsModal from './ResultsModal';

import { useAppDispatch } from '../../hooks/hooks';
import { togglePausedTimer } from '../../store/reducers/gameSlice';

import styles from './ScorePanel.module.scss';

const ScorePanel = () => {
  const dispatch = useAppDispatch();
  const [isResetModalActive, setIsResetModalActive] = useState(false);
  const [isResultsModalActive, setIsResultsModalActive] = useState(false);

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
