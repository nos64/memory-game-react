import React from 'react';
import { ISavedPlayerObject } from '../../../../types/types';
import styles from './ResultRow.module.scss';

const ResultRow: React.FC<ISavedPlayerObject> = ({
  playerName,
  difficulty,
  moves,
  minutesStr,
  secondsStr,
}) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableData}>{playerName}</td>
      <td className={styles.tableData}>{difficulty}</td>
      <td className={styles.tableData}>{moves}</td>
      <td className={styles.tableData}>
        {minutesStr} : {secondsStr}
      </td>
    </tr>
  );
};

export default ResultRow;
