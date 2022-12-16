import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  setSecondsStr,
  setMinutesStr,
  setSeconds,
  setMinutes,
} from '../../../store/reducers/gameSlice';

import styles from './Timer.module.scss';

const Timer = () => {
  const dispatch = useAppDispatch();
  const isGameStart = useAppSelector((state) => state.game.isGameStart);
  const pausedTimer = useAppSelector((state) => state.game.pausedTimer);
  const secondsStr = useAppSelector((state) => state.game.secondsStr);
  const minutesStr = useAppSelector((state) => state.game.minutesStr);
  const minutes = useAppSelector((state) => state.game.minutes);
  const seconds = useAppSelector((state) => state.game.seconds);

  const tick = () => {
    if (pausedTimer) return;
    if (seconds > 58) {
      dispatch(setMinutes(minutes + 1));
      dispatch(setSeconds(0));
    } else dispatch(setSeconds(seconds + 1));
    seconds > 9 ? dispatch(setSecondsStr(`${seconds}`)) : dispatch(setSecondsStr(`0${seconds}`));
    minutes > 9 ? dispatch(setMinutesStr(`${minutes}`)) : dispatch(setMinutesStr(`0${minutes}`));
  };

  useEffect(() => {
    dispatch(setSeconds(seconds));
    dispatch(setMinutes(minutes));
  }, [dispatch, seconds, minutes]);

  useEffect(() => {
    if (isGameStart) {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }
  }, [isGameStart, pausedTimer, seconds, minutes]);

  return (
    <div className={styles.fieldWrapper}>
      Timer:
      <div className={styles.paramField}>
        <div className={styles.dighit}>{minutesStr}</div>
        <span>min</span>
        <span>:</span>
        <div className={styles.dighit}>{secondsStr}</div>
        <span>sec</span>
      </div>
    </div>
  );
};

export default Timer;
