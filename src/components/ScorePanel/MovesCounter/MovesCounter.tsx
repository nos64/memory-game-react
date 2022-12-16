import { useAppSelector } from '../../../hooks/hooks';

import styles from './MovesCounter.module.scss';

const MovesCounter = () => {
  const moves = useAppSelector((state) => state.game.moves);
  return (
    <div className={styles.paramWrapper}>
      Moves:
      <span className={styles.paramField}>{moves}</span>
    </div>
  );
};

export default MovesCounter;
