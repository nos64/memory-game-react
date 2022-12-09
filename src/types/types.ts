export interface IStartForm {
  playerName: string;
  difficulty: string;
  cardList: ICard[];
  isGameStart: boolean;
  pausedTimer: boolean;
}

export interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isActive: boolean;
}
