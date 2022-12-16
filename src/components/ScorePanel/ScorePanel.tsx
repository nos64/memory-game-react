import { useState } from 'react';

import PlayerName from './PlayerName';
import Difficulty from './Difficulty';
import MovesCounter from './MovesCounter';
import Timer from './Timer';
import ResetGameModal from './ResetGameModal';
import ResultsModal from './ResultsModal';
import NewGameModal from './NewGameModal';

import { useAppDispatch } from '../../hooks/hooks';
import { togglePausedTimer } from '../../store/reducers/gameSlice';

import styles from './ScorePanel.module.scss';

const ScorePanel = () => {
  const dispatch = useAppDispatch();
  const [isNewGameActive, setIsNewGameActive] = useState(false);
  const [isResetModalActive, setIsResetModalActive] = useState(false);
  const [isResultsModalActive, setIsResultsModalActive] = useState(false);

  const handleNewGameButtonClick = () => {
    dispatch(togglePausedTimer(true));
    setIsNewGameActive(true);
  };
  const handleResetButtonClick = () => {
    dispatch(togglePausedTimer(true));
    setIsResetModalActive(true);
  };

  const handleResultsButtonClick = () => {
    dispatch(togglePausedTimer(true));
    setIsResultsModalActive(true);
  };

  return (
    <>
      <div className={styles.resultsPanel}>
        <PlayerName />
        <Difficulty />
        <MovesCounter />
        <Timer />
        <button className={styles.panelButton} type="button" onClick={handleNewGameButtonClick}>
          New Game
        </button>
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
      <NewGameModal isNewGameActive={isNewGameActive} setIsNewGameActive={setIsNewGameActive} />
    </>
  );
};

export default ScorePanel;
