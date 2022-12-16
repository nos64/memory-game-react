import React from 'react';
import CardList from '../../components/CardList';
import ScorePanel from '../../components/ScorePanel';

import styles from './GamePage/module.scss';

const GamePage = () => {
  return (
    <>
      <ScorePanel />
      <CardList />
    </>
  );
};

export default GamePage;
