export interface IStartForm {
  playerName: string;
  difficulty: string;
  moves: number;
  cardList: ICard[];
  isGameStart: boolean;
  pausedTimer: boolean;
}

export interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isFliped: boolean;
}
