export interface IStartForm {
  playerName: string;
  difficulty: string;
  cardList: ICard[];
<<<<<<< HEAD
  isGameStart: boolean;
  pausedTimer: boolean;
}
=======
};
>>>>>>> 3f2647ea46fb5e02758f667647067e7721666c54

export interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isActive: boolean;
}
