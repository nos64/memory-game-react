import React, { useState } from 'react';
import styles from './ScorePanel.module.scss';
import ResetGameModal from '../ResetGameModal';
import ResultsModal from '../ResultsModal';

const ScorePanel = () => {
  const [isResetModalActive, setIsResetModalActive] = useState(false);
  const [isResultsModalActive, setIsResultsModalActive] = useState(false);
  return (
    <>
      <div className={styles.resultsPanel}>
        <div className={styles.paramWrapper}>
          Player:
          <span className={styles.paramField}></span>
        </div>
        <div className={styles.paramWrapper}>
          Difficulty:
          <span className={styles.paramField}></span>
        </div>
        <div className={styles.paramWrapper}>
          Moves:
          <span className={styles.paramField}>0</span>
        </div>
        <div className={styles.fieldWrapper}>
          Timer:
          <span className={styles.paramField}>00 min : 00 sec</span>
        </div>
        <button
          className={styles.panelButton}
          type="button"
          onClick={() => setIsResetModalActive(true)}
        >
          Reset
        </button>
        <button
          className={styles.panelButton}
          type="button"
          onClick={() => setIsResultsModalActive(true)}
        >
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
