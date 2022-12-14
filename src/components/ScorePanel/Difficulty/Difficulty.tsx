import { useAppSelector } from '../../../hooks/hooks';

import styles from './Difficulty.module.scss';

const Difficulty = () => {
  const difficulty = useAppSelector((state) => state.game.difficulty);

  return (
    <div className={styles.paramWrapper}>
      Difficulty:
      <span className={styles.paramField}>{difficulty}</span>
    </div>
  );
};

export default Difficulty;
