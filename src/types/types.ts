export interface IStartForm {
  playerName: string;
  difficulty: string;
  cardList: ICard[];
};

export interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isActive: boolean;
}