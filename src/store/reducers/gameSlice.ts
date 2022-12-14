import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shuffle } from '../../utils/utils';
import { ICard, IStartForm } from '../../types/types';
import { cardData } from '../../common/cardData';

const initialState: IStartForm = {
  playerName: '',
  difficulty: '',
  moves: 0,
  cardList: [],
  isGameStart: false,
  pausedTimer: false,
  counterMatch: 0,
  firstCard: null,
  secondCard: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.playerName = action.payload;
    },
    setUserDifficulty(state, action: PayloadAction<string>) {
      state.difficulty = action.payload;
    },
    setCardList(state, action: PayloadAction<string>) {
      const cardsArray = shuffle(cardData);
      let length = 0;
      if (action.payload === '') state.cardList = [];
      if (action.payload === 'easy') length = 6;
      if (action.payload === 'medium') length = 18;
      if (action.payload === 'hard') length = 22;
      const gameArr: ICard[] = cardsArray.slice(0, length);
      state.cardList = shuffle([...gameArr, ...gameArr]);
    },
    setGameStart(state, action: PayloadAction<boolean>) {
      state.isGameStart = action.payload;
    },
    togglePausedTimer(state, action: PayloadAction<boolean>) {
      state.pausedTimer = action.payload;
    },
    changeMovesCounter(state, action: PayloadAction<number>) {
      state.moves += action.payload;
    },
    incrementCounterMatch(state, action: PayloadAction<number>) {
      state.counterMatch += action.payload;
    },
    setFirstCard(state, action: PayloadAction<ICard | null>) {
      state.firstCard = action.payload;
    },
    setSecondCard(state, action: PayloadAction<ICard | null>) {
      state.secondCard = action.payload;
    },
  },
});

export const {
  setUserName,
  setUserDifficulty,
  changeMovesCounter,
  setCardList,
  setGameStart,
  togglePausedTimer,
  incrementCounterMatch,
  setFirstCard,
  setSecondCard,
} = gameSlice.actions;
export default gameSlice.reducer;
