import { ROUTES } from '../../common/routes';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './StartForm.module.scss';
import { IStartForm } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setUserName, setUserDifficulty, setCardList } from '../../store/reducers/userSlice';
import ValidationErrorMessage from '../ValidationErrorMessage';

const StartForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IStartForm>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (data: IStartForm) => {
    dispatch(setUserName(data.playerName));
    localStorage.setItem('playerName', data.playerName);
    dispatch(setUserDifficulty(data.difficulty));
    localStorage.setItem('difficulty', data.difficulty);
    dispatch(setCardList(data.difficulty));
    reset();
    navigate(`${ROUTES.GAME}`);
  };

  return (
    <div className={styles.startFormWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Enter your name"
          autoFocus
          autoComplete="off"
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
