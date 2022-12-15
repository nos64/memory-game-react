import { ICard } from '../types/types';

export const shuffle = (arr: ICard[]) => arr.sort(() => 0.5 - Math.random());

interface ISavedPlayerObject {
  playerName: string;
  difficulty: string;
  minutesStr: string;
  secondsStr: string;
  moves: number;
}

export const saveInStorage = (params: ISavedPlayerObject): void => {
  const resultsArray =
    JSON.parse(localStorage.getItem('results') as string) || <ISavedPlayerObject[]>[];
  const userObj = {
    playerName: params.playerName,
    difficulty: params.difficulty,
    minutesStr: params.minutesStr,
    secondsStr: params.secondsStr,
    moves: params.moves,
  };
  resultsArray.push(userObj);
  if (resultsArray.length > 10) {
    resultsArray.shift();
  }
  localStorage.setItem('results', JSON.stringify(resultsArray));
};

export const getFromStorage = () => {
  return JSON.parse(localStorage.getItem('results') as string) || <ISavedPlayerObject[]>[];
};
