import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { setSecondsStr, setMinutesStr } from '../../../store/reducers/gameSlice';
const Timer = () => {
  const dispatch = useAppDispatch();
  const isGameStart = useAppSelector((state) => state.game.isGameStart);
  const pausedTimer = useAppSelector((state) => state.game.pausedTimer);
  const secondsStr = useAppSelector((state) => state.game.secondsStr);
  const minutesStr = useAppSelector((state) => state.game.minutesStr);
  const [[minutes, seconds], setTime] = useState([0, 0]);
  // const [secondsStr, setSecondsStr] = useState('00');
  // const [minutesStr, setMinutesStr] = useState('00');

  const tick = () => {
    if (pausedTimer) return;
    seconds > 58 ? setTime([minutes + 1, 0]) : setTime([minutes, seconds + 1]);
    seconds > 9 ? dispatch(setSecondsStr(`${seconds}`)) : dispatch(setSecondsStr(`0${seconds}`));
    minutes > 9 ? dispatch(setMinutesStr(`${minutes}`)) : dispatch(setMinutesStr(`0${minutes}`));
  };

  useEffect(() => {
    if (isGameStart) {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }
  });

  return (
    <div className={styles.fieldWrapper}>
      Timer:
      <div className={styles.paramField}>
        <div className={styles.dighit}>{`${minutesStr} min`}</div>
        <span>:</span>
        <div className={styles.dighit}>{`${secondsStr} sec`}</div>
      </div>
    </div>
  );
};

export default Timer;
