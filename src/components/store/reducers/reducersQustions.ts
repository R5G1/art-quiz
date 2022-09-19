import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { arrayQustions } from '../../Data/nameArray';

import type { RootState } from '../store';

interface Iarray {
  name: string;
  number: number;
  check: boolean;
}

interface InameDate {
  array: Iarray[];
}
const storageQustions = JSON.parse(localStorage.getItem('statePictures') || 'false');

const initialState: InameDate = {
  array: storageQustions ? storageQustions : arrayQustions,
};

export const counterSlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addStateQustions: (state, action: PayloadAction<Iarray[]>) => {
      state.array = action.payload;
      localStorage.setItem('stateQustions', JSON.stringify(state.array));
    },
  },
});

export const { addStateQustions } = counterSlice.actions;

export default counterSlice.reducer;
