import { ICard } from '../types/types';

export const shuffle = (arr: ICard[]) => arr.sort(() => 0.5 - Math.random());

const updateStorage = () => {
  const userInfo = localStorage.getItem(key);
  const savedCardList = localStorage.getItem('cardList');
  const updatedCardList = savedCardList
    ? JSON.parse(userInfo)
    : value;

  localStorage.setItem(key, JSON.stringify(updatedUserinfo));

  return updatedUserinfo;
};

export default updateStorage;
