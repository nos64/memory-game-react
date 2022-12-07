import React from 'react';
import styles from './ScorePanel.module.scss';

const ScorePanel = () => {
  return (
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
      <button className={styles.panelButton} type="button">
        Reset
      </button>
      <button className={styles.panelButton} type="button">
        Results
      </button>
    </div>
  );
};

export default ScorePanel;
