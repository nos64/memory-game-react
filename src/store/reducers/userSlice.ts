import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStartForm } from '../../types/types';

const initialState: IStartForm = {
  playerName: '',
  difficulty: '',
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
  },
});

export const { setUserName, setUserDifficulty } = userSlice.actions;
export default userSlice.reducer;
