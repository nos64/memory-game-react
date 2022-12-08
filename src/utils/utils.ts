import { ICard } from '../types/types';
import { cardData } from '../common/cardData';

const shuffle = (arr: ICard[]) => arr.sort(() => 0.5 - Math.random());

export const getCard = (difficulty: string) => {
  const cardsArray = shuffle(cardData);
  let length = 0;
  if (difficulty === 'easy') length = 12;
  if (difficulty === 'medium') length = 18;
  if (difficulty === 'hard') length = 24;
  const gameArr: ICard[] = cardsArray.slice(0, length);

  return shuffle([...gameArr, ...gameArr]);
};
