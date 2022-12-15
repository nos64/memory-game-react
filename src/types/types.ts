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
  secondsStr: string;
  minutesStr: string;
  resultsList: ISavedPlayerObject[] | [];
}

export interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isFliped: boolean;
  isBlocked: boolean;
  index: number;
}

export interface ISavedPlayerObject {
  playerName: string;
  difficulty: string;
  minutesStr: string;
  secondsStr: string;
  moves: number;
}
