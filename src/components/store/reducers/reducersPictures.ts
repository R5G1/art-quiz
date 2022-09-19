import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { arrayPictures } from '../../Data/nameArray';

import type { RootState } from '../store';

interface Iarray {
  name: string;
  number: number;
  check: boolean;
}

interface InameDate {
  array: Iarray[];
}

const storagePictures = JSON.parse(localStorage.getItem('statePictures') || 'false');

const initialState: InameDate = {
  array: storagePictures ? storagePictures : arrayPictures,
};

export const counterSlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addStatePictures: (state, action: PayloadAction<Iarray[]>) => {
      state.array = action.payload;
      localStorage.setItem('statePictures', JSON.stringify(state.array));
    },
  },
});

export const { addStatePictures } = counterSlice.actions;

export default counterSlice.reducer;
