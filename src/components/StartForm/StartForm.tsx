import React from 'react';
import styles from './StartForm.module.scss';

const StartForm = () => {
  return (
    <div className={styles.startFormWrapper}>
      <form className={styles.form} action="">
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Enter your name"
          autoFocus
          autoComplete="off"
          maxLength={20}
        />
        <fieldset className={styles.radioGroup}>
          <legend className={styles.legendForm}>Please select a difficulty level</legend>
          <label className={styles.labelInput}>
            <input className={styles.inputRadio} type="radio" name="difficulty" value="easy" />
            Easy
          </label>
          <label className={styles.labelInput}>
            <input className={styles.inputRadio} type="radio" name="difficulty" value="medium" />
            Medium
          </label>
          <label className={styles.labelInput}>
            <input className={styles.inputRadio} type="radio" name="difficulty" value="hard" />
            Hard
          </label>
        </fieldset>
        <button className={styles.submitButton} type="submit">
          Start
        </button>
      </form>
    </div>
  );
};

export default StartForm;
