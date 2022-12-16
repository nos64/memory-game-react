import { useAppSelector } from '../../../hooks/hooks';

import styles from './PlayerName.module.scss';

const PlayerName = () => {
  const playerName = useAppSelector((state) => state.game.playerName);

  return (
    <div className={styles.paramWrapper}>
      Player:
      <span className={styles.paramField}>{playerName}</span>
    </div>
  );
};

export default PlayerName;
