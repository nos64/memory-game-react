import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shuffle } from '../../utils/utils';
import { ICard, IStartForm } from '../../types/types';
import { cardData } from '../../common/cardData';

const initialState: IStartForm = {
  playerName: '',
  difficulty: '',
  cardList: [],
};

const userSlice = createSlice({
  name: 'user',
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
      if (action.payload === 'hard') length = 23;
      const gameArr: ICard[] = cardsArray.slice(0, length);
      state.cardList = shuffle([...gameArr, ...gameArr]);
    },
  },
});

export const { setUserName, setUserDifficulty, setCardList } = userSlice.actions;
export default userSlice.reducer;
