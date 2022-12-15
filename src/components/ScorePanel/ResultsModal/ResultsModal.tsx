import ModalWrapper from '../../ModalWrapper';
import React, { useEffect, useState } from 'react';
import styles from './ResultsModal.module.scss';
import { togglePausedTimer } from '../../../store/reducers/gameSlice';
import { useAppDispatch } from '../../../hooks/hooks';
import { getFromStorage } from '../../../utils/utils';

interface IResultsModal {
  isResultsModalActive: boolean;
  setIsResultsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResultsModal: React.FC<IResultsModal> = ({
  isResultsModalActive,
  setIsResultsModalActive,
}) => {
  const dispatch = useAppDispatch();
  const [results, setResults] = useState(getFromStorage());
  useEffect(() => {
    console.log(results);
  }, []);

  const closeModal = () => {
    setIsResultsModalActive(false);
    dispatch(togglePausedTimer(false));
  };

  return (
    <ModalWrapper modalActive={isResultsModalActive} setModalActive={closeModal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Results</h2>
        {/* <table className={styles.resultsTable}>
          <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
              <th className={styles.tableData}>Name</th>
              <th className={styles.tableData}>Difficult</th>
              <th className={styles.tableData}>Moves</th>
              <th className={styles.tableData}>Time</th>
            </tr>
          </thead>
          <ul className={styles.resultsList}>
            <li className={styles.resultItem}>
              <table>
                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>Mikhail4141414142222</td>
                  <td className={styles.tableData}>Medium</td>
                  <td className={styles.tableData}>123411</td>
                  <td className={styles.tableData}>99:99</td>
                </tr>
              </table>
            </li>
          </ul>
        </table> */}
        <button className={styles.resultCloseButton} onClick={closeModal}>
          Close
        </button>
      </div>
    </ModalWrapper>
  );
};

export default ResultsModal;
