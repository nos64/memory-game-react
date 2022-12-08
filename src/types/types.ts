export interface IStartForm {
  playerName: string;
  difficulty: string;
};

export interface ICard {
  id: string;
  avers: string;
  reverse: string;
  isActive: boolean;
}