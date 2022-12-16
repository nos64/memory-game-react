import { useAppSelector } from '../../../hooks/hooks';

import styles from './MovesCounter.module.scss';

const MovesCounter = () => {
  const moves = useAppSelector((state) => state.game.moves);
  return (
    <div className={styles.paramWrapper}>
      Moves:
      <div className={styles.paramField}>{moves}</div>
    </div>
  );
};

export default MovesCounter;
