export interface IStartForm {
  playerName: string;
  difficulty: string;
  moves: number;
  cardList: ICard[];
  isGameStart: boolean;
  pausedTimer: boolean;
  counterMatch: number;
  firstCard: ICard | null;
  secondCard: ICard | null;
}

export interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isFliped: boolean;
  isBlocked: boolean;
  index: number;
}
