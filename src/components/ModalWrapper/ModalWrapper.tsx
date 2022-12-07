import React from 'react';
import styles from './ModalWrapper.module.scss';

interface IModalWrapper {
  modalActive: boolean;
  setModalActive: () => void;
  children?: React.ReactNode;
}

const ModalWrapper: React.FC<IModalWrapper> = ({ modalActive, setModalActive, children }) => {
  return (
    <div
      className={modalActive ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={setModalActive}
    >
      <div
        className={
          modalActive ? `${styles.modalContent} ${styles.modalContentActive}` : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
