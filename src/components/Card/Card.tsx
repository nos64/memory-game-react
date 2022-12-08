import React from 'react';
import { ICard } from '../../types/types';
import styles from './Card.module.scss';

const Card: React.FC<ICard> = ({ avers, isActive }) => {
  const handleClickCard = () => {};

  return (
    <div className={styles.memoryCard} onClick={handleClickCard}>
      <img className={styles.backFace} src={avers} alt="Hero" />
    </div>
  );
};

export default Card;
