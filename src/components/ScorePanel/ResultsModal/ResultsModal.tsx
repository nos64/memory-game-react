import React, { useEffect, useState } from 'react';

import ModalWrapper from '../../ModalWrapper';
import ResultRow from './ResultRow';

import { useAppDispatch } from '../../../hooks/hooks';
import { getFromStorage } from '../../../utils/utils';
import { ISavedPlayerObject } from '../../../types/types';
import { togglePausedTimer } from '../../../store/reducers/gameSlice';

import styles from './ResultsModal.module.scss';

interface IResultsModal {
  isResultsModalActive: boolean;
  setIsResultsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResultsModal: React.FC<IResultsModal> = ({
  isResultsModalActive,
  setIsResultsModalActive,
}) => {
  const dispatch = useAppDispatch();
  const [results, setResults] = useState<ISavedPlayerObject[]>([]);

  useEffect(() => {
    if (isResultsModalActive) {
      setResults(getFromStorage());
    }
  }, [isResultsModalActive]);

  const closeModal = () => {
    setIsResultsModalActive(false);
    dispatch(togglePausedTimer(false));
  };

  return (
    <ModalWrapper modalActive={isResultsModalActive} setModalActive={closeModal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Results</h2>
        <table className={styles.resultsTable}>
          <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
              <th className={styles.tableData}>Name</th>
              <th className={styles.tableData}>Difficult</th>
              <th className={styles.tableData}>Moves</th>
              <th className={styles.tableData}>Time</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <ResultRow key={index} {...row} />
            ))}
          </tbody>
        </table>
        <button className={styles.resultCloseButton} onClick={closeModal}>
          Close
        </button>
      </div>
    </ModalWrapper>
  );
};

export default ResultsModal;
