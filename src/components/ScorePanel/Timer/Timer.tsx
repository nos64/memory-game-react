import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import { useAppSelector } from '../../../hooks/hooks';

const Timer = () => {
  const isGameStart = useAppSelector((state) => state.user.isGameStart);
  const pausedTimer = useAppSelector((state) => state.user.pausedTimer);
  const [[minutes, seconds], setTime] = useState([0, 0]);
  const [secondsStr, setSecondsStr] = useState('00');
  const [minutesStr, setMinutesStr] = useState('00');

  const tick = () => {
    if (pausedTimer) return;
    seconds > 58 ? setTime([minutes + 1, 0]) : setTime([minutes, seconds + 1]);
    seconds > 9 ? setSecondsStr(`${seconds}`) : setSecondsStr(`0${seconds}`);
    minutes > 9 ? setMinutesStr(`${minutes}`) : setMinutesStr(`0${minutes}`);
  };

  useEffect(() => {
    if (isGameStart) {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }
  });

  return (
    <div className={styles.timer}>
      <div className={styles.dighit}>{`${minutesStr} min`}</div>
      <span>:</span>
      <div className={styles.dighit}>{`${secondsStr} sec`}</div>
    </div>
  );
};

export default Timer;
