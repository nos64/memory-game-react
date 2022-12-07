import ModalWrapper from '../ModalWrapper';
import React from 'react';
import styles from './ResultsModal.module.scss';

interface IResultsModal {
  isResultsModalActive: boolean;
  setIsResultsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultsModal: React.FC<IResultsModal> = ({
  isResultsModalActive,
  setIsResultsModalActive,
}) => {
  const closeModal = () => {
    setIsResultsModalActive(false);
  };

  return (
    <ModalWrapper modalActive={isResultsModalActive} setModalActive={closeModal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Results</h2>
        <table className={styles.resultsTable}>
          <th className={styles.tableHead}>
            <tr className={styles.tableRow}>
              <td className={styles.tableData}>Name</td>
              <td className={styles.tableData}>Difficult</td>
              <td className={styles.tableData}>Moves</td>
              <td className={styles.tableData}>Time</td>
            </tr>
          </th>
          <ul className={styles.resultsList}>
            <li className={styles.resultItem}>
              <tr className={styles.tableRow}>
                <td className={styles.tableData}>Mikhail4141414142222</td>
                <td className={styles.tableData}>Medium</td>
                <td className={styles.tableData}>123411</td>
                <td className={styles.tableData}>99:99</td>
              </tr>
            </li>
          </ul>
        </table>
        {/* <ul className="results__list">
          <li className="results__item">
            <span className="results__name">
              Name:
              <span className="results__name-value"></span>
            </span>
            <span className="results__difficult">
              Difficult:
              <span className="results__difficult-value"></span>
            </span>
            <span className="results__moves">
              Moves:
              <span className="results__moves-value"></span>
            </span>
            <span className="results__time">
              Moves:
              <span className="results__time-value"></span>
            </span>
          </li>
        </ul> */}
        <button className={styles.resultCloseButton} onClick={closeModal}>
          Close
        </button>
      </div>
    </ModalWrapper>
  );
};

export default ResultsModal;
