import ScorePanel from '../../components/ScorePanel';
import React from 'react';
import styles from './GamePage/module.scss';
import CardList from '../../components/CardList';

const GamePage = () => {
  return (
    <>
      <ScorePanel />
      <CardList />
    </>
  );
};

export default GamePage;
