import { ICard } from '../types/types';

export const shuffle = (arr: ICard[]) => arr.sort(() => 0.5 - Math.random());
