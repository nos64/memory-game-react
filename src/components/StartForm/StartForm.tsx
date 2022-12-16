import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ValidationErrorMessage from './ValidationErrorMessage';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { ROUTES } from '../../common/routes';
import { IStartForm } from '../../types/types';
import {
  setUserName,
  setUserDifficulty,
  setCardList,
  setGameStart,
} from '../../store/reducers/gameSlice';

import styles from './StartForm.module.scss';

const StartForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IStartForm>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const playerName = useAppSelector((state) => state.game.playerName);

  const [name, setName] = useState(playerName);

  const onSubmit = (data: IStartForm) => {
    dispatch(setUserName(data.playerName));
    dispatch(setUserDifficulty(data.difficulty));
    dispatch(setCardList(data.difficulty));
    dispatch(setGameStart(true));
    reset();
    navigate(`${ROUTES.GAME}`);
  };

  const onChange = () => {
    const currentFieldsValues = getValues();
    setName(currentFieldsValues.playerName);
  };

  return (
    <div className={styles.startFormWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Enter your name"
          autoFocus
          autoComplete="off"
          value={name || ''}
          maxLength={20}
          {...register('playerName', {
            required: true,
            minLength: {
              value: 2,
              message: '',
            },
          })}
        />
        <ValidationErrorMessage
          message={errors.playerName && ('Please Enter name (min 2 symbols)' || '')}
        />
        <fieldset className={styles.radioGroup}>
          <legend className={styles.legendForm}>Please select a difficulty level</legend>
          <label className={styles.labelInput}>
            <input
              className={styles.inputRadio}
              type="radio"
              value="easy"
              {...register('difficulty', { required: true })}
            />
            Easy
          </label>
          <label className={styles.labelInput}>
            <input
              className={styles.inputRadio}
              type="radio"
              value="medium"
              {...register('difficulty', { required: true })}
            />
            Medium
          </label>
          <label className={styles.labelInput}>
            <input
              className={styles.inputRadio}
              type="radio"
              value="hard"
              {...register('difficulty', { required: true })}
            />
            Hard
          </label>
        </fieldset>
        <ValidationErrorMessage message={errors.difficulty && ('Please choose difficult' || '')} />
        <button className={styles.submitButton} type="submit">
          Start
        </button>
      </form>
    </div>
  );
};

export default StartForm;
