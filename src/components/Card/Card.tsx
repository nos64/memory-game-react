import React from 'react';
import styles from './Card.module.scss';

interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isActive: boolean;
}
const Card: React.FC<ICard> = ({ avers }) => {
  return (
    <div className={styles.memoryCard}>
      <img className={styles.backFace} src={avers} alt="Hero" />
    </div>
  );
};

export default Card;
