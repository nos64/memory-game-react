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
  secondsStr: '00',
  minutesStr: '00',
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
      if (action.payload === 'easy') length = 12;
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
    resetMovesCounter(state) {
      state.moves = 0;
    },
    setSecondsStr(state, action: PayloadAction<string>) {
      state.secondsStr = action.payload;
    },
    setMinutesStr(state, action: PayloadAction<string>) {
      state.minutesStr = action.payload;
    },
  },
});

export const {
  setUserName,
  setUserDifficulty,
  changeMovesCounter,
  resetMovesCounter,
  setCardList,
  setGameStart,
  togglePausedTimer,
  setSecondsStr,
  setMinutesStr,
} = gameSlice.actions;
export default gameSlice.reducer;
